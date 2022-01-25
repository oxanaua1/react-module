import Joi from "joi";

export const CarValidator=Joi.object({
    model:Joi.string().regex(new RegExp('^[[a-zA-ZА-яёЁЇїІіЄєҐґ]{1,20}$')).required().messages( {
        'string.empty':'"model" не може бути пустим',
        'string.pattern.base':'Тільки букви мін 1 макс 20'}),
    price:Joi.number().min(0).max(1000000).messages({
        'number.base':'Ціна може бути від 1 до 1000000',
        'number.min':'Ціна може бути від 1 до 1000000',
        'number.max':'Ціна може бути від 1 до 1000000'
    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.base':'Рік може бути від 1900 до теперішнього'
})
});

// в модел прописуємо що може бути, Joi.string()-тип даних стрінг і regex - регулярка
//
//
//
//