import { useState, useEffect } from 'react';
import { Users, TrendingUp, AlertCircle } from 'lucide-react';
import LeadsList from './components/LeadsList';
import LeadDetailPanel from './components/LeadDetailPanel';
import OpportunitiesTable from './components/OpportunitiesTable';
import leadsData from './data/leads.json';
import './App.css';

function App() {
  const [leads, setLeads] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  // Simulate API call to load leads
  useEffect(() => {
    const loadLeads = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simulate network latency
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Simulate potential error (uncomment to test error state)
        // if (Math.random() > 0.8) {
        //   throw new Error('Failed to load leads');
        // }
        
        setLeads(leadsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadLeads();
  }, []);

  const handleLeadClick = (lead) => {
    setSelectedLead(lead);
    setIsPanelOpen(true);
  };

  const handleClosePanelOpen = () => {
    setIsPanelOpen(false);
    setSelectedLead(null);
  };

  const handleSaveLead = async (updatedLead) => {
    try {
      setSaving(true);
      
      // Simulate API call with potential failure
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Simulate potential error (uncomment to test error handling)
      // if (Math.random() > 0.7) {
      //   throw new Error('Failed to save lead');
      // }
      
      // Update leads list
      setLeads(prevLeads => 
        prevLeads.map(lead => 
          lead.id === updatedLead.id ? updatedLead : lead
        )
      );
      
      // Update selected lead
      setSelectedLead(updatedLead);
      
    } catch (err) {
      alert(`Error saving: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  const handleConvertToOpportunity = async (lead) => {
    try {
      setSaving(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Create new opportunity
      const newOpportunity = {
        id: Date.now(), // Simple ID generation
        name: `Opportunity - ${lead.name}`,
        stage: 'prospecting',
        amount: Math.floor(Math.random() * 50000) + 10000, // Random amount between 10k-60k
        accountName: lead.company
      };
      
      setOpportunities(prev => [...prev, newOpportunity]);
      
      // Close panel and show success
      setIsPanelOpen(false);
      setSelectedLead(null);
      
      alert(`Lead "${lead.name}" successfully converted to opportunity!`);
      
    } catch (err) {
      alert(`Error converting lead: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  const handleRetry = () => {
    window.location.reload();
  };

  // Error state
  if (error && !loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Error loading data</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={handleRetry}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Mini Seller Console</h1>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>{leads.length} Leads</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>{opportunities.length} Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Leads Section */}
          <section>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Leads</h2>
              <p className="text-gray-600">
                Manage your leads and convert them into sales opportunities.
              </p>
            </div>
            
            <LeadsList
              leads={leads}
              loading={loading}
              onLeadClick={handleLeadClick}
              selectedLeadId={selectedLead?.id}
            />
          </section>

          {/* Opportunities Section */}
          <section>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Opportunities</h2>
              <p className="text-gray-600">
                Track your sales opportunities and pipeline.
              </p>
            </div>
            
            <OpportunitiesTable opportunities={opportunities} />
          </section>
        </div>
      </main>

      {/* Lead Detail Panel */}
      <LeadDetailPanel
        lead={selectedLead}
        isOpen={isPanelOpen}
        onClose={handleClosePanelOpen}
        onSave={handleSaveLead}
        onConvertToOpportunity={handleConvertToOpportunity}
        saving={saving}
      />
    </div>
  );
}

export default App;

