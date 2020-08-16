class Github {
  constructor() {
    this.client_id = 'f506680ed0e2bac86f59';
    this.client_secret = '506f248a722c0d2daabf012be5b074fe68a0e792';
    this.url = 'https://api.github.com/users/';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  getUser = async (user) => {
    const profileResponse = await fetch(
      `${this.url + user}?client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );

    const repoResponse = await fetch(
      `${this.url + user}/repos?per_page=${this.repos_count}&sort=${
        this.repos_sort
      }&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos,
    };
  };
}
