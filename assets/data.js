// All site content lives here. Edit this file to update the portfolio — no code changes needed.
window.PORTFOLIO = {
  name: "Heli Shah",
  tagline: "Computer Science · Nirma University",
  roles: ["Systems & Low-Latency Engineering", "Quantitative Research", "AI for Space & Science", "Security Engineering"],
  intro:
    "I build systems where correctness comes before speed: trading-engine benchmarks that can't be gamed, risk engines that guard every order, and models that catch anomalies in satellite telemetry. I'm a B.Tech Computer Science student at Nirma University, Ahmedabad, and co-founder of Atlas AI Research.",
  links: {
    email: "helishah1729@gmail.com",
    github: "https://github.com/Asc-85129",
    linkedin: "https://www.linkedin.com/in/heli-shah-1b9b0b235/",
    resume: "https://drive.google.com/file/d/1knwtwQz_iOxwvMuQUqlb5IsLqmZuoBrj/view?usp=sharing",
  },

  quotes: {
    kalam: {
      text: "Dream is not that which you see while sleeping, it is something that does not let you sleep.",
      by: "Dr. A. P. J. Abdul Kalam",
      role: "Aerospace scientist · 11th President of India",
    },
    ramanujan: {
      text: "An equation for me has no meaning unless it expresses a thought of God.",
      by: "Srinivasa Ramanujan",
      role: "Mathematician · The Man Who Knew Infinity",
    },
  },

  stats: [
    { value: 9.09, decimals: 2, label: "CGPA / 10" },
    { value: 2, prefix: "#", label: "National · ISRO BAH 2025" },
    { value: 5, label: "Internships & research roles" },
    { value: 99, prefix: "AIR ", label: "Intl. Informatics Olympiad" },
  ],

  education: [
    {
      school: "Institute of Technology, Nirma University",
      degree: "B.Tech, Computer Science & Engineering",
      period: "2023 – 2027",
      detail: "CGPA 9.09 / 10",
    },
    {
      school: "Prakash Higher Secondary School",
      degree: "Physics, Chemistry, Mathematics",
      period: "2021 – 2023",
      detail: "97%",
    },
  ],

  experience: [
    {
      org: "Flipkart Internet Pvt. Ltd.",
      role: "Intern, Catalog Team",
      period: "May 2026 – Jul 2026",
      place: "Bengaluru",
      tags: ["A/B testing", "Causal inference", "FastAPI", "React", "Kubernetes"],
      points: [
        "Built an internal 0-to-1 platform for cross-domain, non-parametric A/B testing, turning ambiguous experiment requirements (multi-phase experiments, gradual rollouts, ramp-up) into a concrete module specification.",
        "Implemented the statistical core using causal inference, forecasting, variance reduction and early-stopping methods for faster, more reliable experiment evaluation.",
        "Developed a FastAPI backend, a React/TypeScript frontend and an automated ingestion pipeline from Flipkart's internal data platform.",
        "Owned operational resilience: designed the backup / disaster-recovery workflow and deployed to a VM and an on-prem Kubernetes cluster (PVCs, CronJob backups, deployment manifests).",
      ],
    },
    {
      org: "Atlas AI Research",
      role: "Co-Founder · SSIP 2.0 Grantee, incubated at E-Cell",
      period: "Feb 2026 – Present",
      place: "Ahmedabad",
      tags: ["Agentic AI", "Autonomous systems", "Predictive maintenance"],
      points: [
        "Building agentic firmware: a modular AI layer that turns drones and rovers into autonomous field workers. Given a task, the firmware plans the mission, executes it, self-monitors in flight and reports back with evidence.",
        "Developed a predictive-maintenance tool for the platform, granted under the Student Startup and Innovation Policy (SSIP).",
      ],
    },
    {
      org: "WorldQuant BRAIN",
      role: "Research Consultant",
      period: "May 2026 – Present",
      place: "Remote",
      tags: ["Alpha research", "Backtesting", "Risk-adjusted metrics"],
      points: [
        "Conducted quantitative research on financial datasets to develop and evaluate systematic alpha signals, testing hypotheses across different market universes and time periods.",
        "Backtested and refined alpha signals using risk-adjusted performance, turnover, correlation and out-of-sample robustness to identify stable, non-redundant signals.",
      ],
    },
    {
      org: "Omspace Rocket and Exploration Pvt. Ltd.",
      role: "Cybersecurity Engineer (Intern)",
      period: "Jun 2025 – Aug 2025",
      place: "India",
      tags: ["Space systems", "Infrastructure security"],
      points: ["Engineered security for space-domain systems: hardened the supporting infrastructure and built internal software."],
    },
    {
      org: "ST Lab, Nirma University",
      role: "Research Assistant · Prof. Sudeep Tanwar",
      period: "2025",
      place: "Ahmedabad",
      tags: ["Security research", "XAI", "Deep learning"],
      points: [
        "Co-authored security-focused research including GridEye (UAV-based remote monitoring for smart-grid SCADA, SGC Iran), an XAI-assisted attack-classification framework for telesurgery, and NanoMedX (DL-based nano e-drug delivery).",
      ],
    },
  ],

  research: [
    {
      title: "GridEye",
      subtitle: "UAV-based remote monitoring for smart-grid SCADA",
      venue: "Smart Grid Conference (SGC), Iran · Co-author",
      area: "Security · Cyber-physical systems",
      text: "Security-focused research on using UAVs to remotely monitor smart-grid SCADA infrastructure.",
    },
    {
      title: "XAI attack classification for telesurgery",
      subtitle: "Explainable AI for securing remote surgery",
      venue: "ST Lab, Nirma University · Co-author",
      area: "Security · Explainable AI",
      text: "An explainable-AI-assisted framework that classifies cyber-attacks on telesurgery systems, so the decision behind each alert can be inspected.",
    },
    {
      title: "NanoMedX",
      subtitle: "Deep-learning-based nano e-drug delivery",
      venue: "ST Lab, Nirma University · Co-author",
      area: "AI for healthcare",
      text: "Deep-learning models applied to nano-scale electronic drug delivery.",
    },
    {
      title: "Nowcasting cloud motion & extreme-weather anomalies",
      subtitle: "Real-time satellite cloud nowcasting",
      venue: "ISRO Bharatiya Antariksh Hackathon 2025 · National 2nd place",
      area: "AI for space · Scientific ML",
      project: "kalam",
      text: "U-Net variants, conditional diffusion models, PINNs and GCNs in PyTorch / TensorFlow, trained with self-supervised retraining. Reached SSIM 0.8743 and PSNR 30.28 dB; deployed for real-time inference with FastAPI and Docker.",
    },
    {
      title: "Mathematical modelling with ODEs",
      subtitle: "Meritorious Award, SCUDEM IX",
      venue: "SIMIODE",
      area: "Applied mathematics",
      text: "Built and defended a differential-equation model of a real-world phenomenon in the SIMIODE SCUDEM challenge, receiving a Meritorious Award.",
    },
  ],

  // Featured projects. `category` drives the filter chips.
  projects: [
    {
      id: "quantforge",
      title: "QuantForge LedgerKernel",
      short: "Distributed benchmarking platform for trading engines, where a fast-but-wrong engine can never beat a correct one.",
      category: "Systems & Quant",
      context: "IICPC Summer Hackathon 2026",
      objective:
        "Fairly rank contestant-submitted order-matching engines (C++ or Go) on correctness, latency, throughput and resource use, with results that can be audited end-to-end.",
      approach: [
        "Submissions compile inside a network-isolated sandbox (2 CPU, 1 GiB RAM, PID limit 128, read-only filesystem).",
        "A deterministic MARS workload is replayed by 100 concurrent Rust bot workers, which record nanosecond latencies into an HDR histogram.",
        "A reference oracle orderbook (price-time priority) validates every response; correctness below 70% caps the total score at 50.",
        "Every event is appended to a SHA-256 hash chain, making each benchmark run tamper-evident; the leaderboard streams over SSE.",
      ],
      results: ["5-component weighted score: correctness 35%, p99 latency 25%, max TPS 20%, stability 10%, resources 10%", "p50 / p90 / p99 and TPS aggregated per second in TimescaleDB"],
      stack: ["Go", "Rust", "C++", "Docker", "Helm", "Redpanda", "TimescaleDB", "React", "SSE"],
      links: [{ label: "GitHub", href: "https://github.com/Asc-85129/quantforge--ledgerkernel" }],
    },
    {
      id: "risk",
      title: "HFT Risk Engine",
      short: "Low-latency pre-trade risk engine in modern C++ with lock-free atomics on the hot path.",
      category: "Systems & Quant",
      context: "Personal project",
      objective:
        "Stop bad orders before they reach the market, as real high-frequency trading desks do, without adding latency to the order path.",
      approach: [
        "Six layered pre-trade checks on every order: order size, notional value, rate limit, position limit, daily loss and drawdown.",
        "Lock-free atomic counters on the hot path; mutexes only for position-map writes and price updates.",
        "Nanosecond timestamps for rolling rate-limit windows; callback hooks for pluggable rejection alerts.",
        "Price-level order book with O(log n) operations, a simulated Gaussian tick feed and realised-PnL / drawdown tracking.",
      ],
      results: ["Live risk dashboard with positions and approval rate", "Catch2 unit tests covering every risk scenario", "INI-configurable limits, graceful SIGINT shutdown"],
      stack: ["C++17", "CMake", "Catch2", "Lock-free atomics", "Multithreading"],
      links: [{ label: "GitHub", href: "https://github.com/Asc-85129/risk-engine" }],
    },
    {
      id: "emad",
      title: "EmAD: ESA Mission Anomaly Detection",
      short: "Satellite telemetry anomaly detection with a residual 1D-CNN and a variational autoencoder.",
      category: "AI for Space",
      context: "ESA Anomaly Detection Benchmark · Mission 1",
      objective:
        "Detect and classify anomalies (communication, power, thermal, software resets and more) in real spacecraft telemetry, so operators can respond before small faults become mission risks.",
      approach: [
        "Preprocessed 55 telemetry channels at 60 s resolution: Savitzky–Golay smoothing with 1st and 2nd derivatives, plus rolling statistics, giving 275 features.",
        "Supervised residual 1D-CNN over 50-step sliding windows classifies 8 anomaly classes (weighted cross-entropy, label smoothing, AdamW, cosine schedule).",
        "Unsupervised convolutional VAE trained only on normal windows flags anomalies by reconstruction error (μ + 2σ threshold).",
      ],
      results: ["1D-CNN: 99.88% test accuracy, weighted F1 0.9988", "VAE: AUC-ROC 0.9669, anomaly F1 0.9621"],
      stack: ["Python", "PyTorch", "SciPy", "scikit-learn", "pandas", "Matplotlib"],
      links: [{ label: "GitHub", href: "https://github.com/Asc-85129/EmAD" }],
    },
    {
      id: "kalam",
      title: "Project KALAM",
      short: "Near-term satellite nowcasting: predicts the next cloud frames from INSAT imagery and visualises them live.",
      category: "AI for Space",
      context: "ISRO Bharatiya Antariksh Hackathon 2025 · National 2nd place · Team DOMinators",
      objective:
        "Forecast short-term cloud motion and extreme-weather anomalies (T+1, T+2, T+3 satellite frames) fast enough to be operationally useful.",
      approach: [
        "Models combining enhanced U-Net architectures, conditional diffusion, physics-informed neural networks (PINNs) and graph convolutional networks.",
        "Self-supervised retraining to keep forecasts accurate as new frames arrive; inference exported to ONNX.",
        "Node.js / Express backend streams live Python inference logs over WebSockets; uploads stored in Cloudflare R2, results in MongoDB.",
        "React + Vite UI for multi-band exploration, timeline animations, overlays and model-performance reports.",
      ],
      results: ["SSIM 0.8743 and PSNR 30.28 dB on predicted frames", "National 2nd place at ISRO's Bharatiya Antariksh Hackathon 2025", "Deployed for real-time inference with FastAPI and Docker"],
      stack: ["PyTorch", "TensorFlow", "ONNX", "FastAPI", "Docker", "Node.js", "WebSocket", "MongoDB", "Cloudflare R2", "React"],
      links: [{ label: "GitHub", href: "https://github.com/Asc-85129/KALAM" }],
    },
    {
      id: "docling",
      title: "Docling AI",
      short: "Agentic academic-manuscript formatter: upload a paper, choose a style, download publication-ready DOCX and LaTeX.",
      category: "Agentic AI",
      context: "HACKaMINeD 2026 · 2nd place, Paperpal track · Team DOMinators",
      objective:
        "Reformat a research manuscript to a journal's style (APA 7, IEEE, Vancouver, MLA, Chicago) without changing what the paper says.",
      approach: [
        "A deterministic six-agent pipeline: Ingest → Rule Interpreter → Structure Detector → Citation Engine → Transformer → Validator.",
        "The Validator produces a 0–100 compliance report; edits that would change meaning are rejected.",
        "An LLM stage (Agno + Groq llama-3.3-70b) generates a compilable LaTeX source, section by section.",
        "A conversational MCP document-editor agent with 25+ DOCX tools handles natural-language post-editing.",
      ],
      results: ["2nd place, Paperpal (Cactus Communications) track at HACKaMINeD 2026", "Live progress streamed to the UI over SSE"],
      stack: ["Python", "FastAPI", "Agno", "Groq", "MCP", "React 19", "Vite", "Tailwind"],
      links: [{ label: "GitHub", href: "https://github.com/info-gallary/PaperPal" }],
    },
    {
      id: "molsculpt",
      title: "MolSculpt-AI",
      short: "Build molecules in mid-air with your bare hand; an agentic AI chemist then characterises what you built.",
      category: "Agentic AI",
      context: "HCI term project · with Nisarg Vashi",
      objective:
        "Make molecule building touchless and accessible with only a webcam, and give instant expert-level analysis of the compound.",
      approach: [
        "On-device MediaPipe hand tracking (21 landmarks); the camera image is never shown, stored or uploaded.",
        "A gesture vocabulary (pinch, ✌️ undo, 👍 analyse, fist to pan) with dwell buttons, angle snapping and valence-aware error prevention.",
        "A from-scratch in-browser cheminformatics engine validated against RDKit: SMILES I/O, ring perception, logP, TPSA, Lipinski / Veber filters, PAINS-style alerts.",
        "A ReAct-style Groq agent calls tools (descriptors, PubChem, similarity, GHS safety) and streams a schema-validated report.",
      ],
      results: ["Built-in user-study kit: timed tasks, SUS and NASA-TLX questionnaires, CSV/JSON export", "Multimodal: hand, mouse, touch, keyboard and voice drive the same editor"],
      stack: ["JavaScript", "MediaPipe", "Groq", "Node.js", "PubChem API", "Web Audio"],
      links: [
        { label: "GitHub", href: "https://github.com/Asc-85129/MolSculpt-AI" },
        { label: "Upstream", href: "https://github.com/info-gallary/MolSculpt-AI" },
      ],
    },
  ],

  achievements: [
    { title: "ISRO Bharatiya Antariksh Hackathon 2025", detail: "National-level winner, 2nd place", tag: "Space" },
    { title: "HACKaMINeD 2026", detail: "2nd place, Paperpal track (Docling AI)", tag: "Hackathon" },
    { title: "ViaSat: Space for Good", detail: "Top 100 of 3,000+ participants", tag: "Space" },
    { title: "Algoqueen '25", detail: "Finalist (rank 30)", tag: "Competitive programming" },
    { title: "Codeforces Expert · LeetCode Knight · CodeChef 4★", detail: "Competitive programming", tag: "Competitive programming" },
    { title: "International Informatics Olympiad", detail: "Rank 99", tag: "Olympiad" },
    { title: "International Reasoning & Aptitude Olympiad", detail: "State rank 11", tag: "Olympiad" },
    { title: "SCUDEM IX (SIMIODE)", detail: "Meritorious Award, mathematical modelling with ODEs", tag: "Mathematics" },
    { title: "QuantStorm 2026", detail: "All-India rank 140", tag: "Quant" },
    { title: "BSides Mumbai 2025", detail: "Youngest speaker at the conference", tag: "Security" },
  ],

  // Volunteering & community. Add entries in the same shape.
  volunteering: [
    {
      org: "The Bindi Project",
      role: "Volunteer",
      period: "Ahmedabad",
      href: "https://www.bindiproject.org/",
      text: "An NGO and charitable trust whose mission is to foster love and respect for all women and girls in India. Rather than lecturing, it inspires change through positive stories: father–daughter and mother–daughter celebrations, awareness drives and pledges of love and respect for daughters across Gujarat.",
    },
    {
      org: "Codess.Cafe",
      role: "Mentee",
      period: "Women in tech",
      href: "https://codess.cafe",
      text: "A pro-bono mentorship initiative for collegiate women in tech that bridges the gender gap through personalised mentorship, technical sessions, resume building and interview preparation.",
    },
  ],

  // Open-source contributions.
  openSource: [
    {
      repo: "pgmpy/pgmpy",
      about: "Python library for causal AI and probabilistic graphical models",
      href: "https://github.com/pgmpy/pgmpy",
      prs: [
        { title: "Add doctest examples to every method in ADMG.py", status: "Merged", date: "Mar 2026", stat: "+204 −11", href: "https://github.com/pgmpy/pgmpy/pull/2884", note: "Documented acyclic directed mixed graphs and added the module to CI doctest coverage." },
        { title: "Fix doctests in UndirectedGraph.py", status: "Merged", date: "Mar 2026", stat: "+41 −34", href: "https://github.com/pgmpy/pgmpy/pull/2890", note: "Corrected failing documentation examples so they run in CI." },
        { title: "Comparator-based filtering for list_models and list_datasets", status: "In review", date: "2026", stat: "+860 −56", href: "https://github.com/pgmpy/pgmpy/pull/3221", note: "New feature letting users filter models and datasets with comparison operators." },
      ],
    },
  ],

  skills: [
    { group: "Languages", items: ["Python", "C++", "Java", "Go", "JavaScript", "TypeScript", "SQL", "Bash"] },
    { group: "AI / ML", items: ["PyTorch", "TensorFlow", "scikit-learn", "Agentic AI", "MCP", "LLMs"] },
    { group: "Systems & Data", items: ["FastAPI", "React", "PostgreSQL", "TimescaleDB", "Redpanda"] },
    { group: "Cloud & DevOps", items: ["Docker", "Kubernetes", "AWS", "GCP", "Git", "CI/CD"] },
  ],

  certifications: ["Microsoft Security Fundamentals (SC-900)", "AWS Cloud Services", "Machine Learning, Andrew Ng (Coursera)"],
};
