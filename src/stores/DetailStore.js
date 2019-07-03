import BaseStore from "./BaseStore";

const Actions = {

}

class Detail extends BaseStore {
  constructor() {
    super();
    // this.registerAction();
  }

  get name() {
    return 'detailStore';
  }

  get defaultState() {
    return {};
  }
}

export default Detail;