import { useState, useEffect } from 'react';
import { apiService } from '../utils/api';

export const useWaitlist = () => {
  const [email, setEmail] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const [copied, setCopied] = useState(false);

  // Check for referral code in URL
  const [referralCode, setReferralCode] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const refCode = urlParams.get('ref');
    if (refCode) {
      setReferralCode(refCode);
    }
  }, []);

  const handleSubmit = async () => {
    if (!email || !walletAddress) {
      setError('Please fill in both email and wallet address');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const userPayload = {
        email,
        wallet_address: walletAddress,
      };

      // Add referral code if present
      if (referralCode) {
        userPayload.referred_by_code = referralCode;
      }

      const response = await apiService.createUser(userPayload);
      
      setUserData(response.user);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error creating user:', err);
      setError(err.message || 'Failed to join waitlist. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyReferralLink = () => {
    if (userData?.referral_link) {
      navigator.clipboard.writeText(userData.referral_link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareToTwitter = () => {
    if (userData?.referral_link) {
      const text = encodeURIComponent('🚀 Just joined the @Vaultwave ecosystem waitlist! The future of decentralized finance is here. Join me and revolutionize how we move money! #Vaultwave #DeFi #Web3');
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(userData.referral_link)}`, '_blank');
    }
  };

  return {
    email,
    setEmail,
    walletAddress,
    setWalletAddress,
    isSubmitted,
    isLoading,
    error,
    waitlistPosition: userData?.waitlist_position || null,
    referralLink: userData?.referral_link || '',
    totalReferrals: userData?.total_referrals || 0,
    copied,
    handleSubmit,
    copyReferralLink,
    shareToTwitter,
    setError
  };
};
