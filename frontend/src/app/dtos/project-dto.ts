/**
 * ProjectDto is used to define,structure, and transfer data from the front and backend.
 */
export class ProjectDto {
  public startDate: Date;
  public endDate: Date;
  public constructor(
    public id:number,
    public projectName: string,
    public projectDescription: string,
    startDate: number,
    endDate: number,
    public cost: number,
    public cancelled: boolean
  ) {
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
  }
}
