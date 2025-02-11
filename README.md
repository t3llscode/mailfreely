# 📧 MailFreely 

**Unlimited eMails for your online Accounts**

MailFreely is a privacy-focused email service that allows you to create unlimited eMail addresses under the `@mailfreely.de` and other domains. Perfect for online privacy, avoiding spam, and compartmentalizing your digital identity.

## 🎯 The Idea

In today's digital world, your email address is often your most exposed piece of personal information. MailFreely solves the privacy problem by offering:

- **Unlimited Email Creation**: Generate as many eMail addresses as you need
- **Privacy by Design**: Each eMail address can be used for specific purposes
- **Spam Protection**: Disposable addresses that can be deleted when compromised
- **t3lls Ecosystem Integration**: Seamlessly integrated with the t3lls platform for billing and management
- **Open Source & AGPL 3.0**: MailFreely is fully open source under the AGPL 3.0 license ensuring transparency and trust

## 🚧 Current Status

**Development Phase**: MailFreely is currently in active development.

### ✅ Completed Features
- **Landing Page**: Just a landing page

### 🔄 In Progress
- Email service core functionality
- User authentication and account management
- Email forwarding and management interface
- Payment integration with t3lls ecosystem

### 📋 Upcoming Features
- Email address creation and management
- Real-time email forwarding
- Mobile application
- Advanced privacy features

## 💰 Pricing

**€0.25/month** - Charged directly from your t3lls account balance

## 🏠 Self-Hosting Option

Prefer full control? You can host MailFreely on your own infrastructure and use your own domain(s). This allows you to:

- Integrate with your existing email setup
- Use custom domains for email addresses
- Manage your own data and privacy

(more information soon)

## 🛠️ Technical Stack

### Frontend
- **Next.js** with TypeScript
- **React** with modern hooks
- **SCSS Modules** for styling
- Responsive design with mobile-first approach

### Backend
- **Express.js** API server
- **PostgreSQL** database with proper indexing
- **Docker** containerization
- **Security middleware** and rate limiting
- **Docker Secrets** for credential management

### Infrastructure
- **Docker Compose** for orchestration
- **Adminer** for database management
- **t3lls Gateway** integration
- Production-ready security patterns

## 🚀 Getting Started

### Prerequisites
- Docker and Docker Compose
- Node.js 18+ (for development)
- Access to t3lls ecosystem

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/t3llscode/mailfreely.git
   cd mailfreely
   ```

2. **Set up Docker secrets**
   ```bash
   cd secrets
   # Create your database password
   echo "your_secure_password" > db_password.txt
   ```

3. **Start the development environment**
   ```bash
   docker-compose up -d
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Database Admin (Adminer): http://localhost:8080

## 📁 Project Structure

```
mailfreely/
├── njs-mailfreely/          # Next.js frontend application
│   ├── next-app/            # React application with landing page
│   ├── docker-compose.dev.yml
│   └── docker-compose.prod.yml
├── api-mailfreely/          # Express.js backend API
│   ├── src/                 # API source code
│   ├── app/                 # Application configuration
│   └── Dockerfiles
├── db-mailfreely/           # PostgreSQL database
│   └── data/                # Persistent database storage
├── secrets/                 # Docker secrets (gitignored)
│   └── db_password.txt
└── docker-compose.yml       # Main orchestration file
```

## 🔗 Links

- **Source Code**: [GitHub Repository](https://github.com/t3llscode/mailfreely) ⭐
- **Parent Ecosystem**: [t3lls Platform](https://t3l.ls)
- **Live Preview**: [MailFreely.de](https://mailfreely.de)

## 📄 License

This project is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**.

### What this means:
- ✅ **Freedom to use, modify, and distribute**
- ✅ **Open source transparency**
- ✅ **Community contributions welcome**
- ⚠️ **Network use requires source disclosure** (AGPL requirement)
- ⚠️ **Derivative works must also be AGPL-3.0**

See the [LICENSE](https://github.com/t3llscode/mailfreely/blob/main/LICENSE) file for the complete license text.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.

## 📞 Contact

**t3lls by Tell Hensel (Sole Proprietorship)**
- Website: [t3l.ls](https://t3l.ls)
- GitHub: [@t3llscode](https://github.com/t3llscode)
- eMail: [contact@t3l.ls](mailto:contact@t3l.ls)

---

*Part of the t3lls ecosystem - Building privacy-focused digital solutions*

**© 2025 t3lls by Tell Hensel** | Source Code licensed under the AGPL 3.0
