import * as _132 from "./auction/v1beta1/auction";
import * as _133 from "./auction/v1beta1/genesis";
import * as _134 from "./auction/v1beta1/query";
import * as _135 from "./auction/v1beta1/tx";
import * as _136 from "./crypto/v1beta1/ethsecp256k1/keys";
import * as _137 from "./exchange/v1beta1/authz";
import * as _138 from "./exchange/v1beta1/events";
import * as _139 from "./exchange/v1beta1/exchange";
import * as _140 from "./exchange/v1beta1/genesis";
import * as _141 from "./exchange/v1beta1/query";
import * as _142 from "./exchange/v1beta1/tx";
import * as _143 from "./insurance/v1beta1/genesis";
import * as _144 from "./insurance/v1beta1/insurance";
import * as _145 from "./insurance/v1beta1/query";
import * as _146 from "./insurance/v1beta1/tx";
import * as _147 from "./ocr/v1beta1/genesis";
import * as _148 from "./ocr/v1beta1/ocr";
import * as _149 from "./ocr/v1beta1/query";
import * as _150 from "./ocr/v1beta1/tx";
import * as _151 from "./oracle/v1beta1/events";
import * as _152 from "./oracle/v1beta1/genesis";
import * as _153 from "./oracle/v1beta1/oracle";
import * as _154 from "./oracle/v1beta1/proposal";
import * as _155 from "./oracle/v1beta1/query";
import * as _156 from "./oracle/v1beta1/tx";
import * as _157 from "./peggy/v1/attestation";
import * as _158 from "./peggy/v1/batch";
import * as _159 from "./peggy/v1/ethereum_signer";
import * as _160 from "./peggy/v1/events";
import * as _161 from "./peggy/v1/genesis";
import * as _162 from "./peggy/v1/msgs";
import * as _163 from "./peggy/v1/pool";
import * as _164 from "./peggy/v1/proposal";
import * as _165 from "./peggy/v1/query";
import * as _166 from "./peggy/v1/types";
import * as _167 from "./types/v1beta1/account";
import * as _168 from "./types/v1beta1/tx_ext";
import * as _169 from "./types/v1beta1/tx_response";
import * as _170 from "./wasmx/v1/genesis";
import * as _171 from "./wasmx/v1/query";
import * as _172 from "./wasmx/v1/tx";
import * as _173 from "./wasmx/v1/wasmx";
import * as _340 from "./auction/v1beta1/tx.amino";
import * as _341 from "./exchange/v1beta1/tx.amino";
import * as _342 from "./insurance/v1beta1/tx.amino";
import * as _343 from "./ocr/v1beta1/tx.amino";
import * as _344 from "./oracle/v1beta1/tx.amino";
import * as _345 from "./peggy/v1/msgs.amino";
import * as _346 from "./auction/v1beta1/tx.registry";
import * as _347 from "./exchange/v1beta1/tx.registry";
import * as _348 from "./insurance/v1beta1/tx.registry";
import * as _349 from "./ocr/v1beta1/tx.registry";
import * as _350 from "./oracle/v1beta1/tx.registry";
import * as _351 from "./peggy/v1/msgs.registry";
import * as _352 from "./auction/v1beta1/query.lcd";
import * as _353 from "./exchange/v1beta1/query.lcd";
import * as _354 from "./insurance/v1beta1/query.lcd";
import * as _355 from "./ocr/v1beta1/query.lcd";
import * as _356 from "./oracle/v1beta1/query.lcd";
import * as _357 from "./peggy/v1/query.lcd";
import * as _358 from "./wasmx/v1/query.lcd";
import * as _359 from "./auction/v1beta1/query.rpc.Query";
import * as _360 from "./exchange/v1beta1/query.rpc.Query";
import * as _361 from "./insurance/v1beta1/query.rpc.Query";
import * as _362 from "./ocr/v1beta1/query.rpc.Query";
import * as _363 from "./oracle/v1beta1/query.rpc.Query";
import * as _364 from "./peggy/v1/query.rpc.Query";
import * as _365 from "./wasmx/v1/query.rpc.Query";
import * as _366 from "./auction/v1beta1/tx.rpc.msg";
import * as _367 from "./exchange/v1beta1/tx.rpc.msg";
import * as _368 from "./insurance/v1beta1/tx.rpc.msg";
import * as _369 from "./ocr/v1beta1/tx.rpc.msg";
import * as _370 from "./oracle/v1beta1/tx.rpc.msg";
import * as _371 from "./peggy/v1/msgs.rpc.msg";
import * as _429 from "./lcd";
import * as _430 from "./rpc.query";
import * as _431 from "./rpc.tx";
export namespace injective {
  export namespace auction {
    export const v1beta1 = { ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._340,
      ..._346,
      ..._352,
      ..._359,
      ..._366
    };
  }
  export namespace crypto {
    export namespace v1beta1 {
      export const ethsecp256k1 = { ..._136
      };
    }
  }
  export namespace exchange {
    export const v1beta1 = { ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._341,
      ..._347,
      ..._353,
      ..._360,
      ..._367
    };
  }
  export namespace insurance {
    export const v1beta1 = { ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._342,
      ..._348,
      ..._354,
      ..._361,
      ..._368
    };
  }
  export namespace ocr {
    export const v1beta1 = { ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._343,
      ..._349,
      ..._355,
      ..._362,
      ..._369
    };
  }
  export namespace oracle {
    export const v1beta1 = { ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._344,
      ..._350,
      ..._356,
      ..._363,
      ..._370
    };
  }
  export namespace peggy {
    export const v1 = { ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._345,
      ..._351,
      ..._357,
      ..._364,
      ..._371
    };
  }
  export namespace types {
    export const v1beta1 = { ..._167,
      ..._168,
      ..._169
    };
  }
  export namespace wasmx {
    export const v1 = { ..._170,
      ..._171,
      ..._172,
      ..._173,
      ..._358,
      ..._365
    };
  }
  export const ClientFactory = { ..._429,
    ..._430,
    ..._431
  };
}