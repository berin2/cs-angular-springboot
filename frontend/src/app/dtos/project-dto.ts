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
    public cancelled: boolean,
    public byteData: string
  ) {
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
    }

    public toApiObject(): object {
      return {
        id:this.id,
        projectName:this.projectName,
        projectDescription:this.projectDescription,
        startDate: this.startDate.getTime(),
        endDate: this.endDate.getTime(),
        cost: this.cost,
        cancelled: this.cancelled,
        byteData:this.byteData
      }
    }
}
