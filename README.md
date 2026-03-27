# Nexconn Chat SDK - Sample Code

This project contains 7 usage samples for the `@nexconn/chat` SDK, covering the following scenarios:

1. Initialize and connect Chat SDK
2. Send a text message in Direct Channel
3. Send a file message in Direct Channel
4. Create Group Channel and send a text message in Group Channel
5. Get recent Direct and Group Channel list
6. Set Do Not Disturb for Direct and Group Channel
7. Get Group Channel member info

## Quick Start

### 1. Update Configuration

Open `config.ts` and replace the following values with your own.

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Dev Server

```bash
npm run dev
```

### 4. Run in Browser

Open the dev server URL in your browser (default `http://localhost:5173`), open DevTools Console (F12), then click the buttons on the page to run each sample.

> **Note**: Please run Sample 1 first to initialize and connect the SDK before running other samples.

## Project Structure

```
├── config.ts                         # Configuration (AppKey, Token, etc.)
├── index.html                        # Browser entry page
├── index.ts                          # Main entry, binds button events
├── samples/
│   ├── 01-init-and-connect.ts        # Sample 1: Initialize and connect
│   ├── 02-send-text-in-direct.ts     # Sample 2: Send text in Direct Channel
│   ├── 03-send-file-in-direct.ts     # Sample 3: Send file in Direct Channel
│   ├── 04-create-group-and-send.ts   # Sample 4: Create Group and send message
│   ├── 05-get-channel-list.ts        # Sample 5: Get Channel list
│   ├── 06-set-no-disturb.ts          # Sample 6: Set Do Not Disturb
│   └── 07-get-group-members.ts       # Sample 7: Get Group member info
├── package.json
└── README.md
```
