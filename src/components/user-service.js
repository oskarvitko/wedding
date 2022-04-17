const API_URL = window.location.origin;

class UserService {
  static async getUserById(id) {
    const response = await fetch(`${API_URL}/user/${id}`);
    const data = await response.json();
    return data;
  }

  static async setUser(user) {
    const response = await fetch(`${API_URL}/send/${user.id}`, {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const _user = await response.json();
    return _user;
  }
}

export default UserService;
