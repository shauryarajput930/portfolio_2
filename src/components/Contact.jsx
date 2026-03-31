import React, { useState, useEffect} from "react";
import {
  Send,
  Terminal,
  Mail,
  User,
  MessageSquare,
  FileText,
  Server,
  Database,
  Code
} from "lucide-react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [flowStep, setFlowStep] = useState(0);
  
   
  const flowSteps = [
    { 
      icon: User, 
      label: "User fills form", 
      color: "text-blue-400",
      trigger: () => formData.name || formData.email || formData.subject || formData.message
    },
    { 
      icon: FileText, 
      label: "Form validation", 
      color: "text-purple-400",
      trigger: () => formData.name && formData.email && formData.subject && formData.message
    },
    { 
      icon: Send, 
      label: "Ready to submit", 
      color: "text-emerald-400",
      trigger: () => formData.name && formData.email && formData.subject && formData.message
    },
    { 
      icon: Code, 
      label: "Sending to server", 
      color: "text-orange-400",
      trigger: () => isSubmitting
    },
    { 
      icon: Server, 
      label: "Processing request", 
      color: "text-pink-400",
      trigger: () => isSubmitting
    },
    { 
      icon: Mail, 
      label: "Email delivered", 
      color: "text-green-400",
      trigger: () => submitted
    }
  ];

  // Update flow based on form state
  useEffect(() => {
    if (submitted) {
      setFlowStep(6);
    } else if (isSubmitting) {
      setFlowStep(4);
      setTimeout(() => setFlowStep(5), 500);
    } else if (formData.name && formData.email && formData.subject && formData.message) {
      setFlowStep(3);
    } else if (formData.name && formData.email) {
      setFlowStep(2);
    } else if (formData.name || formData.email || formData.subject || formData.message) {
      setFlowStep(1);
    } else {
      setFlowStep(0);
    }
  }, [formData, isSubmitting, submitted]);

  // Left side - Animated 3D Cube - REMOVED
  // Right side - Animated Network Graph - REMOVED

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation: Check if all fields are filled
    if (!formData.name.trim()) {
      setError('Name is required');
      return;
    }
    
    if (!formData.email.trim()) {
      setError('Email is required');
      return;
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    if (!formData.subject.trim()) {
      setError('Subject is required');
      return;
    }
    
    if (!formData.message.trim()) {
      setError('Message is required');
      return;
    }
    
    setIsSubmitting(true);
    setError("");
    
    try {
      // Using EmailJS service to send emails directly to your Gmail
      await axios.post('https://portfolio-contact-form-backend.onrender.com/api/contact', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
        
      });
      
      // Show success message
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
      
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to open email client. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-slate-950 text-white min-h-screen px-6 py-12 relative overflow-hidden" id="contact">
      
      {/* Background Code Snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <pre className="absolute top-20 left-10 text-emerald-400 text-xs font-mono select-none hidden xl:block">
{`const sendEmail = async (data) => {
  await transporter.sendMail(data);
  return { success: true };
};`}
        </pre>
      </div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12 relative z-10">
        <div className="flex items-center gap-2 mb-4 font-mono text-sm text-slate-500">
          <span className="text-purple-400">const</span>
          <span className="text-white">contact</span>
          <span className="text-slate-400">=</span>
          <span className="text-blue-400">{"{"}</span>
        </div>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="w-1 h-12 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full"></div>
          <h1 className="specialText w-full text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
        </div>
        
        <p className="text-gray-400 font-mono text-sm">
          <span className="text-slate-600">// </span>
          Let's discuss your next project or collaboration
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-4">
          
          {/* Left Side - Real-time Form Data Preview */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="space-y-4">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-4">
                <div className="font-mono text-xs text-slate-500 mb-3">
                  <span className="text-slate-600">// </span>Form Data
                </div>
                <div className="space-y-2 font-mono text-xs">
                  <div className="p-2 bg-slate-800/50 rounded-lg border border-slate-700">
                    <p className="text-slate-500 mb-1">name:</p>
                    <p className={`${formData.name ? 'text-emerald-400' : 'text-slate-600'} truncate`}>
                      "{formData.name || 'empty'}"
                    </p>
                  </div>
                  <div className="p-2 bg-slate-800/50 rounded-lg border border-slate-700">
                    <p className="text-slate-500 mb-1">email:</p>
                    <p className={`${formData.email ? 'text-blue-400' : 'text-slate-600'} truncate`}>
                      "{formData.email || 'empty'}"
                    </p>
                  </div>
                  <div className="p-2 bg-slate-800/50 rounded-lg border border-slate-700">
                    <p className="text-slate-500 mb-1">subject:</p>
                    <p className={`${formData.subject ? 'text-purple-400' : 'text-slate-600'} truncate`}>
                      "{formData.subject || 'empty'}"
                    </p>
                  </div>
                  <div className="p-2 bg-slate-800/50 rounded-lg border border-slate-700">
                    <p className="text-slate-500 mb-1">message:</p>
                    <p className={`${formData.message ? 'text-pink-400' : 'text-slate-600'} truncate`}>
                      "{formData.message || 'empty'}"
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-4">
                <div className="font-mono text-xs text-slate-500 mb-3">
                  <span className="text-slate-600">// </span>Validation
                </div>
                <div className="space-y-2 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${formData.name ? 'bg-green-400' : 'bg-slate-600'}`}></div>
                    <span className={formData.name ? 'text-white' : 'text-slate-600'}>Name</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${formData.email ? 'bg-green-400' : 'bg-slate-600'}`}></div>
                    <span className={formData.email ? 'text-white' : 'text-slate-600'}>Email</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${formData.subject ? 'bg-green-400' : 'bg-slate-600'}`}></div>
                    <span className={formData.subject ? 'text-white' : 'text-slate-600'}>Subject</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${formData.message ? 'bg-green-400' : 'bg-slate-600'}`}></div>
                    <span className={formData.message ? 'text-white' : 'text-slate-600'}>Message</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center - Contact Form */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8">
              
              {/* Form Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3 font-mono">
                  <Terminal className="w-5 h-5 text-purple-400" />
                  <div>
                    <h2 className="text-base font-bold text-white">
                      <span className="text-slate-500">endpoint:</span>
                      <span className="text-emerald-400 ml-2">"/api/contact"</span>
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      request:
                      <span className="text-purple-400"> POST</span> 
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Messages */}
              {submitted && (
                <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded-xl font-mono text-sm flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-green-400">message.sent = true;</span>
                </div>
              )}

              {error && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl font-mono text-sm flex items-center gap-2">
                  <span className="text-red-400">✗</span>
                  <span className="text-red-400">error: "{error}"</span>
                </div>
              )}

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="flex items-center gap-2 font-mono text-xs text-slate-400 mb-2">
                    <User className="w-4 h-4" />
                    <span className="text-slate-600">// </span>name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='const name = "Your Name"'
                    className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 font-mono text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 font-mono text-xs text-slate-400 mb-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-slate-600">// </span>email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='const email = "your@email.com"'
                    className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 font-mono text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 font-mono text-xs text-slate-400 mb-2">
                    <FileText className="w-4 h-4" />
                    <span className="text-slate-600">// </span>subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder='const subject = "Project Discussion"'
                    className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 font-mono text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 font-mono text-xs text-slate-400 mb-2">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-slate-600">// </span>message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='const message = "Your message here..."'
                    rows={5}
                    className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none font-mono text-sm"
                    required
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-mono text-sm py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>sendMessage()</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

          {/* Right Side - Real-time Message Flow */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="space-y-4">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-4">
                <div className="font-mono text-xs text-slate-500 mb-3">
                  <span className="text-slate-600">// </span>Message Flow
                </div>
                <div className="space-y-2">
                  {flowSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    const isActive = flowStep > index;
                    const isCurrent = flowStep === index + 1;
                    
                    return (
                      <div key={index} className="relative">
                        <div className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-300 ${
                          isActive ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-900/30'
                        } ${isCurrent ? 'scale-105' : ''}`}>
                          <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                            isActive ? step.color : 'text-slate-600'
                          }`}>
                            <IconComponent className="w-3 h-3" />
                          </div>
                          <div className="flex-1">
                            <p className={`text-xs font-mono transition-colors ${
                              isActive ? 'text-white' : 'text-slate-600'
                            }`}>
                              {index + 1}. {step.label}
                            </p>
                          </div>
                          {isActive && (
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                          )}
                        </div>
                        
                        {index < flowSteps.length - 1 && (
                          <div className={`ml-3 w-0.5 h-2 transition-colors duration-300 ${
                            isActive ? 'bg-emerald-400' : 'bg-slate-800'
                          }`}></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-4">
                <div className="font-mono text-xs text-slate-500 mb-3">
                  <span className="text-slate-600">// </span>Status
                </div>
                <div className="space-y-3">
                  <div className="p-2 bg-slate-800/50 rounded-lg border border-slate-700">
                    <p className="text-xs text-slate-500 mb-1">Progress:</p>
                    <div className="w-full bg-slate-700 rounded-full h-1.5 mb-2">
                      <div 
                        className="bg-gradient-to-r from-emerald-400 to-blue-400 h-1.5 rounded-full transition-all duration-500"
                        style={{width: `${(flowStep / flowSteps.length) * 100}%`}}
                      ></div>
                    </div>
                    <p className="text-xs font-mono text-emerald-400">
                      {flowStep}/{flowSteps.length} steps
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between p-2 bg-slate-800/50 rounded-lg border border-slate-700">
                    <span className="text-xs text-slate-400 font-mono">Status:</span>
                    <span className={`text-xs font-mono ${
                      submitted ? 'text-green-400' : 
                      isSubmitting ? 'text-orange-400' : 
                      flowStep >= 3 ? 'text-emerald-400' : 
                      'text-slate-500'
                    }`}>
                      {submitted ? '✓ Sent' : 
                       isSubmitting ? '⟳ Sending' : 
                       flowStep >= 3 ? '✓ Ready' : 
                       '○ Idle'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <div className="max-w-7xl mx-auto mt-6 font-mono text-sm text-slate-500 relative z-10">
        <span className="text-blue-400">{"}"}</span>
        <span className="text-slate-400">;</span>
      </div>

   
      <div className="text-center mt-8 relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-slate-900/50 border border-slate-800 rounded-xl font-mono text-xs">
          <Terminal className="w-4 h-4 text-purple-400" />
          <div className="text-slate-500">
            <span className="text-purple-400">console</span>
            <span className="text-white">.</span>
            <span className="text-blue-400">log</span>
            <span className="text-slate-400">(</span>
            <span className="text-emerald-400">"Looking forward to hearing from you!"</span>
            <span className="text-slate-400">)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
