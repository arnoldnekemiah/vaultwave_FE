import { useState } from 'react';

export const useWaitlist = () => {
  const [email, setEmail] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [waitlistPosition] = useState(4247); // Mock position
  const [referralLink] = useState('https://vaultwave.io/ref/VW4247X9');
  const [copied, setCopied] = useState(false);

  const handleSubmit = () => {
    if (email && walletAddress) {
      setIsSubmitted(true);
    }
  };

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToTwitter = () => {
    const text = encodeURIComponent('🚀 Just joined the @Vaultwave ecosystem waitlist! The future of decentralized finance is here. Join me and revolutionize how we move money! #Vaultwave #DeFi #Web3');
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(referralLink)}`, '_blank');
  };

  return {
    email,
    setEmail,
    walletAddress,
    setWalletAddress,
    isSubmitted,
    waitlistPosition,
    referralLink,
    copied,
    handleSubmit,
    copyReferralLink,
    shareToTwitter
  };
};
