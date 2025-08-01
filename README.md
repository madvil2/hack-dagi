# Hack DAGI - Crypto Scam Detection Platform

An AI-powered platform for analyzing cryptocurrency projects and detecting potential scams using multiple Large Language Models (LLMs).

## 🚀 Features

### 🔍 Multi-LLM Scam Analysis
- **Multiple AI Models**: Utilizes several LLMs for comprehensive analysis
- **Website Parsing**: Automatically scrapes and analyzes project websites
- **Scam Score**: Generates numerical scam probability ratings
- **Detailed Reports**: Provides reasoning behind scam assessments

### 📊 Project Analysis Dashboard
- **Trending Projects**: Monitor popular crypto projects for scam indicators
- **Risk Assessment**: Visual representation of project risk levels
- **Historical Data**: Track project analysis over time

### 🤖 AI-Powered Chat Assistant
- Ask questions about specific crypto projects
- Get instant scam analysis for new projects
- Understand risk factors and red flags

### 📈 Comprehensive Scoring System
- **Scam Probability Score**: 0-100 scale rating
- **Risk Categories**: Technical, Financial, Team, Community analysis
- **Confidence Levels**: AI confidence in assessment accuracy
- **Comparative Analysis**: Compare projects side-by-side

### 🛠️ Additional Features
- **Real-time Monitoring**: Continuous project surveillance
- **Alert System**: Notifications for high-risk projects
- **Community Contributions**: User-submitted project analysis
- **Educational Resources**: Learn about crypto scam indicators

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1
- **UI Framework**: Ant Design + Telegram UI
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Styling**: SASS/SCSS modules
- **HTTP Client**: Axios for API communication
- **AI Integration**: Multiple LLM APIs
- **Web Scraping**: Automated website analysis

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- pnpm package manager
- API keys for LLM services

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hack-dagi
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   ```bash
   cp .env_example .env
   ```
   Configure your environment variables:
   ```env
   REACT_APP_API_URL=your_backend_api_url
   REACT_APP_LLM_API_KEY=your_llm_api_key
   ```

4. **Start the development server**
   ```bash
   pnpm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ChatBot/        # AI chat for project analysis
│   ├── ProjectsSection/ # Crypto project displays
│   ├── ProjectList/    # Project listing components
│   └── common/         # Shared UI components
├── pages/              # Main application pages
│   ├── Chat/           # AI assistant interface
│   ├── Store/          # Project analysis dashboard
│   ├── Projects/       # Project management
│   ├── Quiz/           # Educational scam detection quiz
│   └── Settings/       # User preferences
├── services/           # API services and LLM integration
├── store/              # Redux state management
├── utils/              # Utility functions and constants
└── config/             # Configuration files
```

## 🚀 Available Scripts

- `pnpm start` - Start development server
- `pnpm build` - Build for production
- `pnpm test` - Run tests
- `pnpm eject` - Eject from Create React App

## 🌐 Pages & Routes

- `/` - **Dashboard**: Browse and analyze crypto projects
- `/chat` - **AI Assistant**: Get instant scam analysis
- `/projects` - **Project Manager**: Track analyzed projects
- `/study` - **Education**: Learn about scam detection
- `/contribute` - **Community**: Submit projects for analysis
- `/settings` - **Settings**: Configure analysis parameters

## 🎯 How It Works

### 1. Project Submission
Users can submit crypto project URLs or details for analysis

### 2. Multi-LLM Processing
- **Website Scraping**: Automated extraction of project information
- **Content Analysis**: Multiple LLMs analyze different aspects:
  - Technical documentation quality
  - Team credibility and transparency
  - Tokenomics and financial structure
  - Community engagement patterns
  - Marketing claims vs reality

### 3. Scam Score Generation
- **Weighted Scoring**: Each LLM contributes to final score
- **Risk Categories**: Breakdown by different risk factors
- **Confidence Rating**: System confidence in the assessment

### 4. Report Generation
- **Detailed Analysis**: Comprehensive breakdown of findings
- **Red Flags**: Specific scam indicators identified
- **Recommendations**: Actionable advice for users

## 🔧 AI Models Integration

The platform integrates multiple LLMs for comprehensive analysis:
- **GPT-based models** for general content analysis
- **Specialized models** for financial document review
- **Community sentiment analysis** models
- **Technical documentation** assessment tools

## 🎨 Key Components

### ProjectsSection
Displays analyzed crypto projects with scam scores and risk indicators.

### Chatbot
AI assistant that provides instant scam analysis for user-submitted projects.

### Scam Detection Quiz
Educational component to help users learn scam identification techniques.

## 🚨 Scam Detection Criteria

The platform analyzes projects based on:
- **Team Transparency**: Anonymous teams, fake profiles
- **Technical Claims**: Unrealistic promises, vague technology
- **Financial Red Flags**: Ponzi-like tokenomics, exit scam patterns
- **Community Manipulation**: Fake followers, bot activity
- **Documentation Quality**: Plagiarized whitepapers, poor technical specs

## 🤝 Contributing

Help improve crypto security by contributing to this hackathon project!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/scam-detection-improvement`)
3. Commit your changes (`git commit -m 'Improve scam detection algorithm'`)
4. Push to the branch (`git push origin feature/scam-detection-improvement`)
5. Open a Pull Request

## ⚠️ Disclaimer

This tool is for educational and research purposes. Always conduct your own research before making investment decisions. The scam scores are AI-generated assessments and should not be considered financial advice.

## 🏆 Hackathon Goals

This platform aims to:
- **Protect Investors**: Help users identify potential crypto scams
- **Educate Community**: Raise awareness about scam indicators
- **Leverage AI**: Use multiple LLMs for comprehensive analysis
- **Open Source Security**: Create community-driven scam detection

## 📄 License

This project is built for hackathon purposes. Please check with the team for licensing details.

---

**Built with 🛡️ to protect the crypto community**