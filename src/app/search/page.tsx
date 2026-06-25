import Link from "next/link";

// 1. DEFINE THE TYPE BLUEPRINT
export interface Professor {
  id: number;
  name: string;
  college: string;
  dept: string;
  area: string[];
  country: string;
}

export default function SearchPage() {
  
  // 2. APPLY THE TYPE TO YOUR DATA
  const mockProfessors: Professor[] = [
    { 
      id: 1, 
      name: "Dr. Aris Vance", 
      college: "IIT Kanpur", 
      dept: "Chemical Engineering", 
      area: ["Multicomponent Distillation", "Thermodynamics"], 
      country: "India" 
    },
    { 
      id: 2, 
      name: "Prof. Sarah Jenkins", 
      college: "MIT", 
      dept: "Physics", 
      area: ["Quantum Computing", "Condensed Matter"], 
      country: "USA" 
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold text-academic-primary mb-6">
        Researcher Directory
      </h1>
      
      {/* Filters Row */}
      <div className="bg-white p-4 rounded-lg border border-academic-primary/10 shadow-sm mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <input 
          type="text" 
          placeholder="Search by name or keyword..." 
          className="p-2 border border-academic-primary/20 rounded-md text-sm focus:outline-none focus:border-academic-primary text-academic-primary placeholder-academic-primary/40"
        />
        <select className="p-2 border border-academic-primary/20 rounded-md text-sm bg-white text-academic-primary">
          <option>All Departments</option>
          <option>Chemical Engineering</option>
          <option>Physics</option>
        </select>
        <select className="p-2 border border-academic-primary/20 rounded-md text-sm bg-white text-academic-primary">
          <option>All Countries</option>
          <option>India</option>
          <option>USA</option>
        </select>
        
        {/* Next.js internal Link navigation using Primary Token */}
        <Link 
          href="/"
          className="bg-academic-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-academic-primary/90 transition-colors text-center block"
        >
          Back to Home
        </Link>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockProfessors.map((prof: Professor) => (
          <div 
            key={prof.id} 
            className="bg-white p-6 rounded-lg border border-academic-primary/10 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold text-academic-primary mb-1">
              {prof.name}
            </h3>
            <p className="text-sm text-academic-primary/60 mb-2">
              {prof.dept} • {prof.college} ({prof.country})
            </p>
            
            {/* Research Tag Clusters */}
            <div className="flex flex-wrap gap-2 mt-4">
              {prof.area.map((tag: string, index: number) => (
                <span 
                  key={index} 
                  className="px-2.5 py-0.5 bg-academic-primary/5 text-academic-primary/80 text-xs font-medium rounded-full border border-academic-primary/10"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}