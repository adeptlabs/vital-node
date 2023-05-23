import { AxiosInstance } from 'axios';
import {
  AreaInfo,
  ClientFacingLabTest,
  HealthInsurance,
  LabResultsMetadata,
  LabResultsResponse,
  Order,
  OrderRequestResponse,
  PatientAdress,
  PatientDetails,
  Physician,
} from './models/lab_tests_model';

export class OrdersApi {
  baseURL: string;
  client: AxiosInstance;
  constructor(baseURL: string, axios: AxiosInstance) {
    this.baseURL = baseURL;
    this.client = axios;
  }

  //   Create new order
  public async create_order(
    user_id: string,
    patient_details: PatientDetails,
    patient_address: PatientAdress,
    lab_test_id: string,
    physician?: Physician,
    health_insurance?: HealthInsurance
  ): Promise<OrderRequestResponse> {
    const resp = await this.client.post(this.baseURL.concat('/order'), {
      user_id: user_id,
      patient_details: patient_details,
      patient_address: patient_address,
      lab_test_id: lab_test_id,
      physician: physician ? physician : null,
      health_insurance: health_insurance ? health_insurance : null,
    });
    return resp.data;
  }

  //   Get order status.
  public async getOrder(orderId: string): Promise<Order> {
    const resp = await this.client.get(
      this.baseURL.concat(`/order/${orderId}`)
    );
    return resp.data;
  }

  public async getOrders(page?: number, size?: number): Promise<Order[]> {
    const resp = await this.client.get(
      this.baseURL.concat(`/orders?`) +
        new URLSearchParams({
          page: page ? page.toString() : '1',
          size: size ? size.toString() : '50',
        })
    );
    return resp.data;
  }

  //   Cancels order.
  public async cancelOrder(orderId: string): Promise<OrderRequestResponse> {
    const resp = await this.client.post(
      this.baseURL.concat(`/order/${orderId}/cancel`)
    );
    return resp.data;
  }
}

export class ResultsApi {
  baseURL: string;
  client: AxiosInstance;
  constructor(baseURL: string, axios: AxiosInstance) {
    this.baseURL = baseURL;
    this.client = axios;
  }
  // GET both metadata and raw json test data.
  public async getResults(orderId: string): Promise<LabResultsResponse> {
    const resp = await this.client.get(
      this.baseURL.concat(`/order/${orderId}/result`)
    );
    return resp.data;
  }

  // GET gets the lab result for the order in PDF format.
  // TODO Check response type for PDF
  public async getResultsPdf(orderId: string): Promise<string> {
    const resp = await this.client.get(
      this.baseURL.concat(`/order/${orderId}/result/pdf`)
    );
    return resp.data;
  }

  // GET metadata related to order results, such as
  // lab metadata, provider and sample dates.
  public async getResultsMetadata(
    orderId: string
  ): Promise<LabResultsMetadata> {
    const resp = await this.client.get(
      this.baseURL.concat(`/order/${orderId}/result/metadata`)
    );
    return resp.data;
  }

  // GET lab-testing information about a geographical area,
  // such as whether the area is served by our Phlebotomy network.
  public async getAreaInfo(zip_code: string): Promise<AreaInfo> {
    const resp = await this.client.get(
      this.baseURL.concat('/area/info?') +
        new URLSearchParams({ zip_code: zip_code })
    );
    return resp.data;
  }
}

export class LabTestsApi {
  baseURL: string;
  client: AxiosInstance;
  Orders: OrdersApi;
  Results: ResultsApi;

  constructor(baseURL: string, axios: AxiosInstance) {
    this.baseURL = baseURL;
    this.client = axios;
    this.Orders = new OrdersApi(baseURL, axios);
    this.Results = new ResultsApi(baseURL, axios);
  }
  public async getTests(): Promise<ClientFacingLabTest> {
    const resp = await this.client.get(this.baseURL.concat(`/lab_tests`));
    return resp.data;
  }
}
