import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/common/Card";
import { CTAButton } from "../components/common/CTAButton";
import { FileUpload } from "../components/common/FileUpload";
import PageLayout from "../components/layout/PageLayout";
import {
  BarChart3,
  Shield,
  TrendingUp,
  AlertCircle,
  ArrowLeft,
  Upload,
} from "lucide-react";

const PortfolioAnalysisPage = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileSelect = (file: File) => {
    setUploadedFile(file);
  };

  const handleAnalyze = async () => {
    if (!uploadedFile) return;

    setIsAnalyzing(true);
    // Simulate analysis time
    setTimeout(() => {
      setIsAnalyzing(false);
      // In a real app, this would process the file and show results
    }, 3000);
  };

  return (
    <PageLayout className="bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="p-3 bg-primary-foreground/10 rounded-lg">
                <BarChart3 className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl font-bold">Portfolio Health Check</h1>
            </div>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Upload your investment portfolio data for comprehensive analysis
              and personalized recommendations from our AI financial advisors.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <CTAButton
              to="/"
              variant="outline"
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </CTAButton>
          </div>

          {/* Main Upload Section */}
          <Card variant="elevated" className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Upload Your Portfolio Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-2xl mx-auto">
                <FileUpload
                  onFileSelect={handleFileSelect}
                  acceptedTypes={[".csv", ".xlsx", ".xls"]}
                  maxSize={10}
                  className="mb-8"
                />

                {uploadedFile && (
                  <div className="text-center">
                    <CTAButton
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      variant="accent"
                      size="lg"
                      className="flex items-center space-x-2 mx-auto"
                    >
                      {isAnalyzing ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-accent-foreground"></div>
                          <span>Analyzing...</span>
                        </>
                      ) : (
                        <>
                          <Upload className="h-5 w-5" />
                          <span>Analyze Portfolio</span>
                        </>
                      )}
                    </CTAButton>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card variant="interactive">
              <CardContent className="text-center p-8">
                <div className="p-4 bg-accent/10 rounded-lg mx-auto mb-4 w-fit">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Performance Analysis
                </h3>
                <p className="text-text-secondary">
                  Comprehensive review of your portfolio's historical
                  performance, risk-adjusted returns, and benchmark comparisons.
                </p>
              </CardContent>
            </Card>

            <Card variant="interactive">
              <CardContent className="text-center p-8">
                <div className="p-4 bg-primary/10 rounded-lg mx-auto mb-4 w-fit">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Risk Assessment
                </h3>
                <p className="text-text-secondary">
                  Detailed analysis of portfolio diversification, volatility,
                  and risk exposure across different asset classes.
                </p>
              </CardContent>
            </Card>

            <Card variant="interactive">
              <CardContent className="text-center p-8">
                <div className="p-4 bg-secondary/20 rounded-lg mx-auto mb-4 w-fit">
                  <BarChart3 className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  AI Recommendations
                </h3>
                <p className="text-text-secondary">
                  Personalized suggestions for portfolio optimization,
                  rebalancing strategies, and investment opportunities.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Information Panel */}
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <AlertCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    What We Analyze
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-text-secondary">
                    <div>
                      <h4 className="font-medium text-text-primary mb-2">
                        Portfolio Metrics:
                      </h4>
                      <ul className="space-y-1">
                        <li>• Asset allocation breakdown</li>
                        <li>• Sector and geographic diversification</li>
                        <li>• Risk-adjusted returns (Sharpe ratio)</li>
                        <li>• Volatility and drawdown analysis</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary mb-2">
                        Recommendations:
                      </h4>
                      <ul className="space-y-1">
                        <li>• Rebalancing suggestions</li>
                        <li>• Tax optimization strategies</li>
                        <li>• Risk management improvements</li>
                        <li>• Cost reduction opportunities</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-card rounded-lg border border-card-border">
                    <h4 className="font-medium text-text-primary mb-2">
                      Supported File Formats:
                    </h4>
                    <p className="text-sm text-text-secondary">
                      CSV files with columns for: Security Name, Quantity,
                      Purchase Price, Current Price, Date
                      <br />
                      Excel files (.xlsx, .xls) with similar structure
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg">
            <Shield className="h-6 w-6 text-accent mx-auto mb-2" />
            <p className="text-sm text-text-secondary">
              <strong className="text-text-primary">
                Your privacy is protected.
              </strong>
              All uploaded data is processed securely and automatically deleted
              after analysis. We never store your financial information.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PortfolioAnalysisPage;
