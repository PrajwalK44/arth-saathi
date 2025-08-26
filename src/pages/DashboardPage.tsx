import PageLayout from "../components/layout/PageLayout";
import { SectionCards } from "../components/SectionCards";
import { PortfolioChart } from "../components/PortfolioChart";
import { PortfolioTable } from "../components/PortfolioTable";
import portfolioData from "../lib/portfolioData.json";

const DashboardPage = () => {
  return (
    <PageLayout className="min-h-screen bg-background">
      <div className="container mx-auto py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Portfolio Dashboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track your investments, monitor performance, and make informed
            financial decisions with ArthSaathi
          </p>
        </div>

        {/* Key Metrics Cards */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 px-4 lg:px-6">
            Key Metrics
          </h2>
          <SectionCards />
        </section>

        {/* Portfolio Performance Chart */}
        <section className="px-4 lg:px-6">
          <h2 className="text-2xl font-semibold mb-6">Portfolio Performance</h2>
          <PortfolioChart />
        </section>

        {/* Portfolio Holdings Table */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 px-4 lg:px-6">
            Portfolio Holdings
          </h2>
          <PortfolioTable data={portfolioData} />
        </section>
      </div>
    </PageLayout>
  );
};

export default DashboardPage;
