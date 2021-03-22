// converts a slug like /careers/internships/ into
// ['/careers/', '/careers/internships/']
export const breakdownSlugIntoUrls = slug => {
  const parts = slug.split("/");

  // remove from start and end of array
  parts.shift();
  parts.pop();

  return parts.reduce((res, curr) => {
    return [...res, (res.slice(-1)[0] || "/") + curr + "/"];
  }, []);
};

// converts the graphql query of all created pages (with slugs) to the sidebar nav data object
// WARNING: this does a lot of confusing stuff. ask Evan what is going on if you want to modify it
export const breakdownSitePagesToSidebar = data => {
  return data.reduce(
    (
      res,
      {
        node: {
          context: { slug },
        },
      }
    ) => {
      if (slug === null) return res;
      const urls = breakdownSlugIntoUrls(slug);

      let innerPart = {};
      if (res.some(val => val.url === urls[0])) {
        const innerPartIdx = res.findIndex(val => val.url === urls[0]);

        if (!res[innerPartIdx].nodes) {
          // create inner nodes
          res[innerPartIdx].nodes = [
            {
              label: urls[1]
                .split("/")[2]
                .replace(/[-]/g, " ")
                .replace(/\b\w/g, c => c.toUpperCase()),
              url: urls[1],
            },
          ];
          // if we have any more levels add them
          if (urls.length > 2) {
            res[innerPartIdx].nodes[0].nodes = [
              {
                label: urls[2]
                  .split("/")[3]
                  .replace(/[-]/g, " ")
                  .replace(/\b\w/g, c => c.toUpperCase()),
                url: urls[2],
              },
            ];
          }
        } else if (res[innerPartIdx].nodes.some(val => val.url === urls[1])) {
          // if our second layer exists
          const moreInnerPartIdx = res[innerPartIdx].nodes.findIndex(
            val => val.url === urls[1]
          );

          if (!res[innerPartIdx].nodes[moreInnerPartIdx].nodes) {
            // add inner node if it exists
            res[innerPartIdx].nodes[moreInnerPartIdx].nodes = [
              {
                label: urls[2]
                  .split("/")[3]
                  .replace(/[-]/g, " ")
                  .replace(/\b\w/g, c => c.toUpperCase()),
                url: urls[2],
              },
            ];
          } else {
            // add to most inner nodes
            res[innerPartIdx].nodes[moreInnerPartIdx].nodes.push({
              label: urls[2]
                .split("/")[3]
                .replace(/[-]/g, " ")
                .replace(/\b\w/g, c => c.toUpperCase()),
              url: urls[2],
            });
          }
        } else {
          // if inner nodes exists but we need to make a more inner node
          res[innerPartIdx].nodes.push({
            label: urls[1]
              .split("/")[2]
              .replace(/[-]/g, " ")
              .replace(/\b\w/g, c => c.toUpperCase()),
            url: urls[1],
          });

          // if we have any more levels add them
          if (urls.length > 2) {
            res[innerPartIdx].nodes[
              res[innerPartIdx].nodes.length - 1
            ].nodes = [
              {
                label: urls[2]
                  .split("/")[3]
                  .replace(/[-]/g, " ")
                  .replace(/\b\w/g, c => c.toUpperCase()),
                url: urls[2],
              },
            ];
          }
        }
      } else {
        // build out inner part
        innerPart = {
          label: urls[0]
            .replace(/[/]/g, "")
            .replace(/\b\w/g, c => c.toUpperCase()),
          url: urls[0],
        };

        if (urls.length > 1) {
          innerPart.nodes = [
            {
              label: urls[1]
                .split("/")[2]
                .replace(/[-]/g, " ")
                .replace(/\b\w/g, c => c.toUpperCase()),
              url: urls[1],
            },
          ];
          // if we have any more levels add them
          if (urls.length > 2) {
            innerPart.nodes[0].nodes = [
              {
                label: urls[2]
                  .split("/")[3]
                  .replace(/[-]/g, " ")
                  .replace(/\b\w/g, c => c.toUpperCase()),
                url: urls[2],
              },
            ];
          }
        }

        return [...res, innerPart];
      }

      return res;
    },
    [
      {
        label: "Home",
        url: "/home/",
      },
    ]
  );
};
