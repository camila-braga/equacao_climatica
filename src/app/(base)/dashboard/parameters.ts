type ParametersType = {
  a: number,
  b: number,
  r2: number
}

type ParisParametersType = {
	r2: number,
}

type AdjustParametersType = {
  linear: ParametersType,
  log: ParametersType,
  exp: ParametersType,
  geo: ParametersType,
  pot: ParametersType,
  quad: ParametersType & {c: number},
  paris_linear: ParisParametersType;
  paris_log: ParisParametersType;
  paris_exp: ParisParametersType;
  paris_geo: ParisParametersType;
  paris_pot: ParisParametersType;
  paris_quad: ParisParametersType;
}

export const parameters : AdjustParametersType = {
    "linear": {
        "r2": 0.975664,
        "a": 1.6514990007,
        "b": -2929.3264561628
    },
    "log": {
        "r2": 0.974453,
        "a": 3287.1633120455,
        "b": -24611.6172227657
    },
    "exp": {
        "r2": 0.961422,
        "a": 0.0045565218,
        "b": 0.0410395588
    },
    "geo": {
        "r2": 0.961422,
        "a": 1.0045669186,
        "b": 0.0410395588
    },
    "pot": {
        "r2": 0.959556,
        "a": 9.0708970243,
        "b": 4.244136938728782e-28
    },
    "quad": {
        "r2": 0.995023,
        "a":0.0134446195,
        "b":-51.9062270036,
        "c": 50403.4861774991
    },
    "paris_linear": {
        "r2": 0.994127
    },
    "paris_log": {
        "r2": 0.994014
    },
    "paris_exp": {
        "r2": 0.993051
    },
    "paris_geo": {
        "r2": 0.993203
    },
    "paris_pot": {
        "r2": 0.992987
    },
    "paris_quad": {
        "r2": 0.995821
    }
  }
