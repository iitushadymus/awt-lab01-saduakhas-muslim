import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next writes extra instruction files into the project root otherwise.
  agentRules: false,
};

export default nextConfig;
