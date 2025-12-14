import { X, Building2, Calendar, MapPin, Award, Target, Code } from 'lucide-react';
import { experiences } from '../data/experience';

interface ExperienceLandingProps {
  onClose: () => void;
}

export default function ExperienceLanding({ onClose }: ExperienceLandingProps) {
  const internships = experiences.filter(exp => exp.type === 'internship');
  const projects = experiences.filter(exp => exp.type === 'project');
  const research = experiences.filter(exp => exp.type === 'research');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
      <div className="min-h-screen">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Experience</h1>
                <p className="text-gray-600 mt-2">Complete professional journey and achievements</p>
              </div>
              <button
                onClick={onClose}
                className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={24} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
              <Building2 size={32} className="text-gray-700 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{internships.length}</h3>
              <p className="text-gray-600 font-medium">Internships</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
              <Code size={32} className="text-gray-700 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{projects.length}</h3>
              <p className="text-gray-600 font-medium">Projects</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
              <Target size={32} className="text-gray-700 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{research.length}</h3>
              <p className="text-gray-600 font-medium">Research</p>
            </div>
          </div>

          <div className="space-y-16">
            {internships.length > 0 && (
              <div className="space-y-8">
                <div className="flex items-center gap-4 pb-4 border-b-2 border-gray-200">
                  <Building2 size={28} className="text-gray-700" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Professional Internships</h2>
                </div>
                <div className="space-y-8">
                  {internships.map((exp) => (
                    <div
                      key={exp.id}
                      className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200"
                    >
                      <div className="space-y-6">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="space-y-3">
                            <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                            <div className="flex flex-wrap items-center gap-4 text-gray-600">
                              <div className="flex items-center gap-2">
                                <Building2 size={18} />
                                <span className="font-semibold">{exp.company}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin size={18} />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg">
                            <Calendar size={18} className="text-gray-600" />
                            <span className="text-sm font-medium text-gray-700">{exp.period}</span>
                          </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed text-lg">{exp.description}</p>

                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Award size={20} className="text-gray-700" />
                            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                              Key Achievements
                            </h4>
                          </div>
                          <ul className="grid md:grid-cols-2 gap-4">
                            {exp.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <span className="text-gray-400 mt-0.5">•</span>
                                <span className="text-gray-700 text-sm leading-relaxed">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {research.length > 0 && (
              <div className="space-y-8">
                <div className="flex items-center gap-4 pb-4 border-b-2 border-gray-200">
                  <Target size={28} className="text-gray-700" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Research & Leadership</h2>
                </div>
                <div className="space-y-8">
                  {research.map((exp) => (
                    <div
                      key={exp.id}
                      className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200"
                    >
                      <div className="space-y-6">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="space-y-3">
                            <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                            <div className="flex flex-wrap items-center gap-4 text-gray-600">
                              <div className="flex items-center gap-2">
                                <Building2 size={18} />
                                <span className="font-semibold">{exp.company}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin size={18} />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg">
                            <Calendar size={18} className="text-gray-600" />
                            <span className="text-sm font-medium text-gray-700">{exp.period}</span>
                          </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed text-lg">{exp.description}</p>

                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Award size={20} className="text-gray-700" />
                            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                              Key Achievements
                            </h4>
                          </div>
                          <ul className="grid md:grid-cols-2 gap-4">
                            {exp.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <span className="text-gray-400 mt-0.5">•</span>
                                <span className="text-gray-700 text-sm leading-relaxed">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {projects.length > 0 && (
              <div className="space-y-8">
                <div className="flex items-center gap-4 pb-4 border-b-2 border-gray-200">
                  <Code size={28} className="text-gray-700" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Academic Projects</h2>
                </div>
                <div className="space-y-8">
                  {projects.map((exp) => (
                    <div
                      key={exp.id}
                      className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200"
                    >
                      <div className="space-y-6">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="space-y-3">
                            <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                            <div className="flex flex-wrap items-center gap-4 text-gray-600">
                              <div className="flex items-center gap-2">
                                <Building2 size={18} />
                                <span className="font-semibold">{exp.company}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin size={18} />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg">
                            <Calendar size={18} className="text-gray-600" />
                            <span className="text-sm font-medium text-gray-700">{exp.period}</span>
                          </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed text-lg">{exp.description}</p>

                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Award size={20} className="text-gray-700" />
                            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                              Key Achievements
                            </h4>
                          </div>
                          <ul className="grid md:grid-cols-2 gap-4">
                            {exp.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <span className="text-gray-400 mt-0.5">•</span>
                                <span className="text-gray-700 text-sm leading-relaxed">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
