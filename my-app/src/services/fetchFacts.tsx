import axios from "axios";
import { IFacts } from "../interfaces/facts";

export default class FactsService {
  static async fetchPosts(setFatcs: any) {
    const response = await axios.get<IFacts>(
      "https://cat-fact.herokuapp.com/facts"
    );
    return setFatcs(response.data);
  }

}
