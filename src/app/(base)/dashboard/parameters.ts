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
        "a": 1.6515,
        "b": -2929.3265
    },
    "log": {
        "r2": 0.974453,
        "a": 3287.1633,
        "b": -24611.6172
    },
    "exp": {
        "r2": 0.961422,
        "a": 0.0046,
        "b": 0.0410
    },
    "geo": {
        "r2": 0.961422,
        "a": 1.0046,
        "b": 0.0410
    },
    "pot": {
        "r2": 0.959556,
        "a": 9.0709,
        "b": 4.244136938728782e-28
    },
    "quad": {
        "r2": 0.995023,
        "a":0.0134,
        "b":-51.9062,
        "c":50403.4862
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
