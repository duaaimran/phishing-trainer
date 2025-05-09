export const emailSamples = [
    {
      subject: "Important: Action Required",
      from: "support@paypa1.com",
      body: "Your account has been limited. Click here to verify your information.",
      isPhishing: true,
      clues: ["Misspelled domain: paypa1.com", "Urgent action required"]
    },
    {
      subject: "Your Receipt from Apple",
      from: "no_reply@apple.com",
      body: "Thanks for your purchase. View your invoice in your Apple account.",
      isPhishing: false,
      clues: ["Legitimate domain", "No suspicious links"]
    },
    {
      subject: "Confirm your giveaway entry",
      from: "giveaway@netflix-bonus.com",
      body: "You're 1 of 10 lucky winners! Click now to claim your $100 reward.",
      isPhishing: true,
      clues: ["Unusual domain", "Too good to be true"]
    }
  ];