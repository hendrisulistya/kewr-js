import * as _177 from "./epochs/genesis";
import * as _178 from "./epochs/query";
import * as _179 from "./gamm/pool-models/balancer/balancerPool";
import * as _180 from "./gamm/v1beta1/genesis";
import * as _181 from "./gamm/v1beta1/query";
import * as _182 from "./gamm/v1beta1/tx";
import * as _183 from "./gamm/pool-models/balancer/tx/tx";
import * as _184 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _185 from "./gamm/pool-models/stableswap/tx";
import * as _186 from "./incentives/gauge";
import * as _187 from "./incentives/genesis";
import * as _188 from "./incentives/params";
import * as _189 from "./incentives/query";
import * as _190 from "./incentives/tx";
import * as _191 from "./lockup/genesis";
import * as _192 from "./lockup/lock";
import * as _193 from "./lockup/query";
import * as _194 from "./lockup/tx";
import * as _195 from "./mint/v1beta1/genesis";
import * as _196 from "./mint/v1beta1/mint";
import * as _197 from "./mint/v1beta1/query";
import * as _198 from "./pool-incentives/v1beta1/genesis";
import * as _199 from "./pool-incentives/v1beta1/gov";
import * as _200 from "./pool-incentives/v1beta1/incentives";
import * as _201 from "./pool-incentives/v1beta1/query";
import * as _202 from "./store/v1beta1/tree";
import * as _203 from "./streamswap/v1/event";
import * as _204 from "./streamswap/v1/genesis";
import * as _205 from "./streamswap/v1/params";
import * as _206 from "./streamswap/v1/query";
import * as _207 from "./streamswap/v1/state";
import * as _208 from "./streamswap/v1/tx";
import * as _209 from "./superfluid/genesis";
import * as _210 from "./superfluid/params";
import * as _211 from "./superfluid/query";
import * as _212 from "./superfluid/superfluid";
import * as _213 from "./superfluid/tx";
import * as _214 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _215 from "./tokenfactory/v1beta1/genesis";
import * as _216 from "./tokenfactory/v1beta1/params";
import * as _217 from "./tokenfactory/v1beta1/query";
import * as _218 from "./tokenfactory/v1beta1/tx";
import * as _219 from "./twap/v1beta1/genesis";
import * as _220 from "./twap/v1beta1/query";
import * as _221 from "./twap/v1beta1/twap_record";
import * as _222 from "./txfees/v1beta1/feetoken";
import * as _223 from "./txfees/v1beta1/genesis";
import * as _224 from "./txfees/v1beta1/gov";
import * as _225 from "./txfees/v1beta1/query";
import * as _374 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _375 from "./gamm/pool-models/stableswap/tx.amino";
import * as _376 from "./gamm/v1beta1/tx.amino";
import * as _377 from "./incentives/tx.amino";
import * as _378 from "./lockup/tx.amino";
import * as _379 from "./streamswap/v1/tx.amino";
import * as _380 from "./superfluid/tx.amino";
import * as _381 from "./tokenfactory/v1beta1/tx.amino";
import * as _382 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _383 from "./gamm/pool-models/stableswap/tx.registry";
import * as _384 from "./gamm/v1beta1/tx.registry";
import * as _385 from "./incentives/tx.registry";
import * as _386 from "./lockup/tx.registry";
import * as _387 from "./streamswap/v1/tx.registry";
import * as _388 from "./superfluid/tx.registry";
import * as _389 from "./tokenfactory/v1beta1/tx.registry";
import * as _390 from "./epochs/query.lcd";
import * as _391 from "./gamm/v1beta1/query.lcd";
import * as _392 from "./incentives/query.lcd";
import * as _393 from "./lockup/query.lcd";
import * as _394 from "./mint/v1beta1/query.lcd";
import * as _395 from "./pool-incentives/v1beta1/query.lcd";
import * as _396 from "./streamswap/v1/query.lcd";
import * as _397 from "./superfluid/query.lcd";
import * as _398 from "./tokenfactory/v1beta1/query.lcd";
import * as _399 from "./twap/v1beta1/query.lcd";
import * as _400 from "./txfees/v1beta1/query.lcd";
import * as _401 from "./epochs/query.rpc.Query";
import * as _402 from "./gamm/v1beta1/query.rpc.Query";
import * as _403 from "./incentives/query.rpc.Query";
import * as _404 from "./lockup/query.rpc.Query";
import * as _405 from "./mint/v1beta1/query.rpc.Query";
import * as _406 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _407 from "./streamswap/v1/query.rpc.Query";
import * as _408 from "./superfluid/query.rpc.Query";
import * as _409 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _410 from "./twap/v1beta1/query.rpc.Query";
import * as _411 from "./txfees/v1beta1/query.rpc.Query";
import * as _412 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _413 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _414 from "./gamm/v1beta1/tx.rpc.msg";
import * as _415 from "./incentives/tx.rpc.msg";
import * as _416 from "./lockup/tx.rpc.msg";
import * as _417 from "./streamswap/v1/tx.rpc.msg";
import * as _418 from "./superfluid/tx.rpc.msg";
import * as _419 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _434 from "./lcd";
import * as _435 from "./rpc.query";
import * as _436 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = { ..._177,
      ..._178,
      ..._390,
      ..._401
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._179,
      ..._180,
      ..._181,
      ..._182,
      ..._376,
      ..._384,
      ..._391,
      ..._402,
      ..._414
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._183,
          ..._374,
          ..._382,
          ..._412
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._184,
          ..._185,
          ..._375,
          ..._383,
          ..._413
        };
      }
    }
  }
  export const incentives = { ..._186,
    ..._187,
    ..._188,
    ..._189,
    ..._190,
    ..._377,
    ..._385,
    ..._392,
    ..._403,
    ..._415
  };
  export const lockup = { ..._191,
    ..._192,
    ..._193,
    ..._194,
    ..._378,
    ..._386,
    ..._393,
    ..._404,
    ..._416
  };
  export namespace mint {
    export const v1beta1 = { ..._195,
      ..._196,
      ..._197,
      ..._394,
      ..._405
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._198,
      ..._199,
      ..._200,
      ..._201,
      ..._395,
      ..._406
    };
  }
  export namespace store {
    export const v1beta1 = { ..._202
    };
  }
  export namespace streamswap {
    export const v1 = { ..._203,
      ..._204,
      ..._205,
      ..._206,
      ..._207,
      ..._208,
      ..._379,
      ..._387,
      ..._396,
      ..._407,
      ..._417
    };
  }
  export const superfluid = { ..._209,
    ..._210,
    ..._211,
    ..._212,
    ..._213,
    ..._380,
    ..._388,
    ..._397,
    ..._408,
    ..._418
  };
  export namespace tokenfactory {
    export const v1beta1 = { ..._214,
      ..._215,
      ..._216,
      ..._217,
      ..._218,
      ..._381,
      ..._389,
      ..._398,
      ..._409,
      ..._419
    };
  }
  export namespace twap {
    export const v1beta1 = { ..._219,
      ..._220,
      ..._221,
      ..._399,
      ..._410
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._222,
      ..._223,
      ..._224,
      ..._225,
      ..._400,
      ..._411
    };
  }
  export const ClientFactory = { ..._434,
    ..._435,
    ..._436
  };
}