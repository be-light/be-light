class BeLightHeader {
  public LOGO: HTMLImageElement;
  public searchButton: HTMLButtonElement;
  public startDate: HTMLInputElement;
  public endDate: HTMLInputElement;
  public bagCount: string;

  constructor() {
    this.LOGO = document.querySelector(".header__left--logo");
    this.searchButton = document.querySelector(".intro__searchform--submitbtn");

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
      this.startDate = document.querySelector(".startDate");
      this.endDate = document.querySelector(".endDate");
      this.bagCount = document.querySelector("input[name=bagCount]").innerHTML;

      console.log(this.startDate);
      console.log(this.endDate);
      console.log(this.bagCount);
    });
  };
}

export default new BeLightHeader();
