const API_BASE_URL = 'http://localhost:3001';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.errors || 'API request failed');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Create user (join waitlist)
  async createUser(userData) {
    return this.request('/api/v1/users', {
      method: 'POST',
      body: JSON.stringify({ user: userData }),
    });
  }

  // Get user details
  async getUser(userId) {
    return this.request(`/api/v1/users/${userId}`);
  }

  // Get user waitlist position
  async getUserWaitlistPosition(userId) {
    return this.request(`/api/v1/users/${userId}/waitlist_position`);
  }

  // Validate referral code
  async validateReferralCode(code) {
    try {
      return await this.request(`/api/v1/referral/${code}`);
    } catch (error) {
      return { valid: false, error: error.message };
    }
  }

  // Create referral record
  async createReferral(referralData) {
    return this.request('/api/v1/referrals', {
      method: 'POST',
      body: JSON.stringify({ referral: referralData }),
    });
  }
}

export const apiService = new ApiService();
export default apiService;
