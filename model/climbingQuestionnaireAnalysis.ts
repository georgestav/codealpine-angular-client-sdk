/**
 * codealpine api
 * The codealpine API description
 *
 * OpenAPI spec version: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ClimbingQuestionnaire } from './climbingQuestionnaire';
import { ClimbingQuestionnaireUser } from './climbingQuestionnaireUser';

export interface ClimbingQuestionnaireAnalysis { 
    id: number;
    message: string;
    minValue: number;
    maxValue: number;
    questionnaire: ClimbingQuestionnaire;
    userResponse: ClimbingQuestionnaireUser;
}