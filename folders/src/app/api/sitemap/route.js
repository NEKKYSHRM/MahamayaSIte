// const baseUrl = "https://mcaet.vercel.app";

// const staticRoutes = [
//   "", // homepage
//   "departments/fmpe/aboutDpt",
//   "departments/pfe/aboutDpt",
//   "departments/swce/aboutDpt",
//   "departments/ide/aboutDpt",
//   "departments/ree/aboutDpt",
//   "departments/cse/aboutDpt",
//   "departments/me/aboutDpt",
// ];

// export default async function handler(req, res) {
//   res.setHeader("Content-Type", "application/xml");

//   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
// ${staticRoutes
//   .map(
//     (path) => `
//   <url>
//     <loc>${baseUrl}/${path}</loc>
//     <changefreq>weekly</changefreq>
//     <priority>${path === "" ? "1.0" : "0.8"}</priority>
//   </url>
// `
//   )
//   .join("")}
// </urlset>`;

//   res.status(200).send(sitemap);
// }

const baseUrl = "https://mcaet.vercel.app";

// Only include the path from the root (without appending to `/sitemap.xml`)
const departments = [
  "",
  "aboutUs",
  "departments/fmpe/aboutDpt",
  "departments/pfe/aboutDpt",
  "departments/swce/aboutDpt",
  "departments/ide/aboutDpt",
  "departments/ree/aboutDpt",
  "departments/cse/aboutDpt",
  "departments/me/aboutDpt",
];

const facultySlugs = ["nc-shahi", "pkm"];

export async function GET(req) {
  const departmentRoutes = departments.map((dept) => `/${dept}`);
  const facultyRoutes = facultySlugs.map((slug) => `/faculty/${slug}`);

  const staticRoutes = ["/", ...departmentRoutes, ...facultyRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
  .map(
    (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
