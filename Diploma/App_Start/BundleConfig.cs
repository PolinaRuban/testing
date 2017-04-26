using System.Web;
using System.Web.Optimization;

namespace Diploma.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/wwwroot/shared.bundle.js").Include("~/wwwroot/shared.bundle.js"));
            bundles.Add(new ScriptBundle("~/wwwroot/testing.bundle.js").Include("~/wwwroot/testing.bundle.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/bootstrap.css", "~/Content/site.css"));
        }
    }
}
