// 1. DEFINE THE DATA CONTRACT
interface ResearcherProfile {
  name: string;
  institution: string;
  orcidId: string;
  biography: string;
  researchFields: string[];
}

export default function AccountPage() {
  // 2. ENFORCE TYPES ON PROFILE DATA
  const profile: ResearcherProfile = {
    name: "Dr. Aris Vance",
    institution: "IIT Kanpur",
    orcidId: "0000-0002-1825-0097",
    biography: "Research focusing on optimizing continuous multi-component distillation sequences and examining thermodynamic fluid behavior at near-critical points.",
    researchFields: ["Chemical Engineering", "Thermodynamics"],
  };

  // Get initials for the avatar box dynamically
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(-2);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* ORCID Verification Header Banner using brand accent tokens */}
      <div className="bg-academic-orcid/10 border border-academic-orcid/30 rounded-lg p-4 flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <span className="w-3 h-3 bg-academic-orcid rounded-full animate-pulse"></span>
          <div>
            <p className="text-sm font-semibold text-academic-primary">Connected via ORCID iD</p>
            <p className="text-xs text-academic-primary/70 font-mono">{profile.orcidId}</p>
          </div>
        </div>
        <span className="text-xs font-bold uppercase tracking-wider bg-academic-orcid/20 text-academic-primary px-2 py-1 rounded">
          Verified Account
        </span>
      </div>

      {/* Main Profile Layout */}
      <div className="bg-white rounded-lg border border-academic-primary/10 shadow-sm p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Column Profile Sidebar */}
        <div className="flex flex-col items-center space-y-4 text-center md:border-r md:border-academic-primary/5 md:pr-6">
          <div className="w-24 h-24 bg-academic-primary/5 rounded-full flex items-center justify-center text-academic-primary/60 font-bold text-2xl tracking-wider">
            {initials}
          </div>
          <div>
            <h2 className="text-xl font-bold text-academic-primary">{profile.name}</h2>
            <p className="text-sm text-academic-primary/60">{profile.institution}</p>
          </div>
        </div>

        {/* Right Column Meta Fields */}
        <div className="md:col-span-2 space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-academic-primary/50 mb-1">
              Biography
            </label>
            <p className="text-sm text-academic-primary/80 leading-relaxed font-serif">
              {profile.biography}
            </p>
          </div>
          
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-academic-primary/50 mb-1">
              Designated Research Fields
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {profile.researchFields.map((field: string, index: number) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-academic-primary/5 text-academic-primary text-xs font-medium rounded-md border border-academic-primary/10"
                >
                  {field}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}