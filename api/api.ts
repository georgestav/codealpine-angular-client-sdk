export * from './climbingQuestionnaire.service';
import { ClimbingQuestionnaireService } from './climbingQuestionnaire.service';
export * from './climbingStats.service';
import { ClimbingStatsService } from './climbingStats.service';
export * from './default.service';
import { DefaultService } from './default.service';
export * from './navigationLinks.service';
import { NavigationLinksService } from './navigationLinks.service';
export * from './notifications.service';
import { NotificationsService } from './notifications.service';
export * from './users.service';
import { UsersService } from './users.service';
export const APIS = [ClimbingQuestionnaireService, ClimbingStatsService, DefaultService, NavigationLinksService, NotificationsService, UsersService];
