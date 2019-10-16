class BeLightHeader {
  public LOGO: HTMLImageElement;
  constructor() {
    this.LOGO = document.querySelector(".header__left--logo");

    /* Add All EventListeners */
    this.addEvents();
  }

  public addEvents = () => {
    /* Click Move Event */
    this.LOGO.addEventListener("click", () => {
      location.href = "/";
    });
  };
}

export default new BeLightHeader();
