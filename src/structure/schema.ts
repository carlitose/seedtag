import { Joi } from 'celebrate';
import { PROTOCOL, ENEMIES_TYPE } from './constants';

export const yvhRequestSchema = Joi.object().keys({
  protocols: Joi.array()
    .items(Joi.string().valid(...Object.values(PROTOCOL)))
    .required(),
  scan: Joi.array()
    .items(
      Joi.object().keys({
        coordinates: Joi.object().keys({
          x: Joi.number().required(),
          y: Joi.number().required(),
        }),
        enemies: Joi.object().keys({
          type: Joi.string()
            .valid(...Object.values(ENEMIES_TYPE))
            .required(),
          number: Joi.number().required(),
        }),
        allies: Joi.number().allow(null),
      }),
    )
    .required(),
});
