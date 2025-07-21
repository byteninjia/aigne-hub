# AIGNE Hub

**The Centralized AI Provider for the AIGNE Ecosystem**

_Formerly known as AI Kit, now evolved into AIGNE Hub_

## Overview

AIGNE Hub represents the evolution of our AI Kit project into a comprehensive, centralized AI provider service designed specifically for the AIGNE ecosystem. What began as a simple adapter for various Large Language Model (LLM) backends has grown into a sophisticated platform that serves as the default LLM and AIGC (AI Generated Content) provider for applications built with the AIGNE framework.

This transformation reflects our broader product expansion, which includes AIGNE Studio (our no-code AI tool) and the complete AIGNE framework suite. AIGNE Hub now stands as a core component that seamlessly integrates with all AIGNE products, providing unified AI capabilities across the entire ecosystem.

## What is AIGNE Hub?

AIGNE Hub is a centralized service that manages connections to various LLM and AIGC providers, eliminating the need for individual applications to handle API keys, usage tracking, and billing separately. Built as a [Blocklet](https://blocklet.io) using the AIGNE framework, it provides a single point of access for all your generative AI needs.

### Key Benefits

- **Self-Hosting Ready**: Deploy your own instance for complete control and privacy
- **Unified Provider Management**: Connect to multiple AI providers through one interface
- **Centralized Authentication**: Store and manage all API keys securely in one place
- **Usage Analytics**: Comprehensive tracking and monitoring of AI service consumption
- **Flexible Billing**: Run for internal use or offer as a service with built-in credit system
- **Seamless Integration**: Works out-of-the-box with AIGNE Framework applications

## Features

### 🤖 **Multi-Provider Support**

- **OpenAI** - GPT models and DALL-E
- **Anthropic** - Claude models
- **Amazon Bedrock** - AWS hosted models
- **Google Gemini** - Google's AI models
- **DeepSeek** - Advanced reasoning models
- **Ollama** - Local model deployment
- **OpenRouter** - Access to multiple providers
- **xAI** - Grok and other xAI models
- And more on the way...

### 🔐 **Security & Authentication**

- Encrypted API key storage and management
- Support for API Keys and Access Key Pairs
- Fine-grained access controls

### 💳 **Advanced Billing System**

- **Credit-Based Payments**: Flexible usage-based billing
- **Automatic Credit Grants**: New users receive starter credits
- **Model-Specific Rates**: Customizable pricing for different AI capabilities
- **Usage Tracking**: Detailed consumption analytics and billing history
- **Payment Kit Integration**: Seamless credit purchases and management

### ⚡ **Developer Experience**

- **Built-in Playground**: Test and experiment with AI models in real-time
- **AIGNE CLI Integration**: Local development support through AIGNE framework
- **RESTful APIs**: Standard HTTP endpoints for easy integration
- **Comprehensive Documentation**: Clear guides and code examples

### 📊 **Monitoring & Analytics**

- **Observability Component**: Built-in usage metrics and performance monitoring
- **Cost Analysis**: Track spending across providers and models
- **Usage Patterns**: Understand consumption trends and optimize costs

## The AIGNE Ecosystem

AIGNE Hub is designed to work seamlessly within the broader AIGNE ecosystem:

- **AIGNE Framework**: When you build applications using the AIGNE framework, AIGNE Hub automatically serves as your AI provider, handling all backend AI service management
- **AIGNE Studio**: Our no-code tool leverages AIGNE Hub to provide AI capabilities without requiring technical setup
- **AIGNE CLI**: Developers can use AIGNE Hub locally during development for consistent AI access across environments

This integration means that whether you're building with code or using our no-code tools, AIGNE Hub works behind the scenes to manage all your generative AI service needs efficiently and cost-effectively.

## Deployment Scenarios

AIGNE Hub supports flexible deployment options to meet different organizational needs:

### 🏢 **Enterprise Self-Hosting**

**Perfect for internal teams and organizations**

- Deploy within your own infrastructure for complete control
- Manage AI access for internal applications and teams
- Keep all usage data and API keys within your security perimeter
- No external billing - pay only for the AI services you consume
- Ideal for:
  - Corporate AI initiatives
  - Development teams building AI applications
  - Organizations with strict data governance requirements

### 🚀 **Service Provider Mode**

**Turn AIGNE Hub into a customer-facing AI service**

- Enable the built-in credit billing system with Payment Kit integration
- Offer AI capabilities as a service to your customers
- Set custom pricing and profit margins for different models
- Automatic user onboarding with starter credits
- Comprehensive usage tracking and billing management
- Ideal for:
  - AI service providers
  - SaaS platforms adding AI features
  - Consultancies offering AI solutions
  - Educational institutions

## Technical Architecture

### Built with Modern Technologies

- **AIGNE Framework**: Latest version refactoring for enhanced performance and integration
- **Node.js & TypeScript**: Robust backend with full type safety
- **React 19**: Modern frontend with latest React features
- **SQLite**: Reliable local data storage with Sequelize ORM
- **Blocklet**: Cloud-native deployment and scaling capabilities

### Supported AI Capabilities

- **Chat Completions**: Conversational AI and text generation
- **Image Generation**: AI-powered image creation and editing
- **Embeddings**: Vector representations for semantic search and AI applications
- **Custom Model Support**: Extensible architecture for new providers and models

## Quick Start

### Installation

1. **Deploy on Blocklet Server**:

   - Visit [Blocklet Store](https://store.blocklet.dev) and search for "AIGNE Hub"
   - Click "Launch" and follow the installation wizard
   - Configure your Blocklet Server if needed

2. **Configure AI Providers**:
   - Access AIGNE Hub admin panel
   - Navigate to **Config → AI Config → AI Providers**
   - Add your API keys for desired providers

### For Internal Use (Self-Hosting)

3. **Start Using Immediately**:
   - Your AIGNE Hub is ready for internal team usage
   - Use OAuth integration or direct API access
   - No billing configuration needed - you pay AI providers directly

### For Customer Service (Service Provider)

3. **Enable Credit Billing**:
   - Install Payment Kit component
   - Enable credit billing in AIGNE Hub preferences
   - Configure model rates and user credit grants
   - Set up customer registration and payment flows

### Basic Usage

```typescript
// Using AIGNE Framework with AIGNE Hub
import { AIGNEHubChatModel } from "@aigne/aigne-hub";

const model = new AIGNEHubChatModel({
  url: "https://your-aigne-hub-url/api/v2/chat",
  accessKey: "your-oauth-access-key",
  model: "openai/gpt-3.5-turbo",
});

const result = await model.invoke({
  messages: "Hello, AIGNE Hub!",
});

console.log(result);
```

## Credit System

AIGNE Hub includes a sophisticated credit-based billing system designed for service providers:

### For Service Providers

- **Custom Pricing Models**: Set your own rates for different AI models and capabilities
- **Profit Margin Control**: Add markup to provider costs for sustainable business models
- **Automatic Billing**: Credits are automatically deducted based on actual usage
- **Payment Integration**: Seamless credit purchases through Payment Kit
- **User Onboarding**: New customers receive starter credits to try your service
- **Transparent Billing**: Detailed usage history and cost breakdowns for customers

### For Self-Hosting

- **Optional Feature**: Credit system can be disabled for internal-only deployments
- **Usage Tracking**: Monitor consumption for cost allocation and budgeting
- **No Markup Needed**: Pay AI providers directly without additional billing complexity

## Contributing

We welcome contributions to AIGNE Hub! This project is part of the larger AIGNE ecosystem and follows our community guidelines.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/blocklet/ai-kit.git
cd ai-kit

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Project Structure

- `/blocklets/core/` - Main AIGNE Hub application
- `/packages/` - Shared libraries and components
- `/api/` - Backend API implementation
- `/src/` - Frontend React application

## Support & Community

- **Documentation**: [AIGNE Hub Docs](https://developer.blocklet.io)
- **Community**: [ArcBlock Community](https://community.arcblock.io)
- **Issues**: [GitHub Issues](https://github.com/blocklet/ai-kit/issues)
- **Email**: blocklet@arcblock.io

## License

AIGNE Hub is part of the ArcBlock ecosystem. Please refer to our license terms for usage and distribution guidelines.

---

**Transform your AI development workflow with AIGNE Hub - the central nervous system for all your generative AI needs.**
