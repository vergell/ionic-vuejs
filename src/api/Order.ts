interface OrderData {
   id: number
   value: string
}

export default class OrderAPI {
   private dataList: OrderData[] = []

   public async fetchData(): Promise<OrderData[]> {
      return this.dataList
   }

   public async updateData(data: OrderData): Promise<OrderData[]> {
      this.dataList.push(data)
      return this.dataList
   }
}
