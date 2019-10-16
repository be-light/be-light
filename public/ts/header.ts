class BeLightHeader {
  public LOGO: HTMLImageElement;
  public searchButton: HTMLButtonElement;
  public startDate: HTMLInputElement;
  public endDate: HTMLInputElement;
  public bagCount: HTMLInputElement;

  constructor() {
    this.LOGO = document.querySelector(".header__left--logo");
    this.searchButton = document.querySelector(".intro__searchform--submitbtn");
    this.startDate = document.querySelector(".startDate");
    this.endDate = document.querySelector(".endDate");
    this.bagCount = document.querySelector("input[name=bagCount]");

    /* Add All EventListeners */
    this.addEvents();
  }

  public addEvents = () => {
    /* Click Move Event */
    this.LOGO.addEventListener("click", () => {
      location.href = "/";
    });

    /* Click Seach Button Event */
    this.searchButton.addEventListener("click", () => {
      console.log(this.startDate.value);
      console.log(this.endDate.value);
      console.log(this.bagCount.value);
    });
  };
}

export default new BeLightHeader();
