import { Locale } from "../locale";
export declare class ru implements Locale {
    atX0SecondsPastTheMinuteGt20(): string | null;
    atX0MinutesPastTheHourGt20(): string | null;
    commaMonthX0ThroughMonthX1(): string | null;
    commaYearX0ThroughYearX1(): string | null;
    use24HourTimeFormatByDefault(): boolean;
    everyMinute(): string;
    everyHour(): string;
    anErrorOccuredWhenGeneratingTheExpressionD(): string;
    atSpace(): string;
    everyMinuteBetweenX0AndX1(): string;
    at(): string;
    spaceAnd(): string;
    everySecond(): string;
    everyX0Seconds(s?: string): string;
    secondsX0ThroughX1PastTheMinute(): string;
    atX0SecondsPastTheMinute(s?: string): string;
    everyX0Minutes(s?: string): string;
    minutesX0ThroughX1PastTheHour(): string;
    atX0MinutesPastTheHour(s?: string): string;
    everyX0Hours(s?: string): string;
    betweenX0AndX1(): string;
    atX0(): string;
    commaEveryDay(): string;
    commaEveryX0DaysOfTheWeek(s?: string): string;
    commaX0ThroughX1(s?: string): ", со %s по %s" | ", с %s по %s";
    commaAndX0ThroughX1(s?: string): " и со %s по %s" | " и с %s по %s";
    first(s?: string): string;
    second(s?: string): string;
    third(s?: string): string;
    fourth(s?: string): string;
    fifth(s?: string): string;
    commaOnThe(s?: string): ", во " | ", в ";
    spaceX0OfTheMonth(): string;
    lastDay(): string;
    commaOnTheLastX0OfTheMonth(s?: string): string;
    commaOnlyOnX0(s?: string): ", только во %s" | ", только в %s";
    commaAndOnX0(): string;
    commaEveryX0Months(s?: string): string;
    commaOnlyInMonthX0(): string;
    commaOnlyInX0(): string;
    commaOnTheLastDayOfTheMonth(): string;
    commaOnTheLastWeekdayOfTheMonth(): string;
    commaDaysBeforeTheLastDayOfTheMonth(s?: string): string;
    firstWeekday(): string;
    weekdayNearestDayX0(): string;
    commaOnTheX0OfTheMonth(): string;
    commaEveryX0Days(s?: string): string;
    commaBetweenDayX0AndX1OfTheMonth(s?: string): ", со %s по %s число месяца" | ", с %s по %s число месяца";
    commaOnDayX0OfTheMonth(s?: string): ", во %s число месяца" | ", в %s число месяца";
    commaEveryX0Years(s?: string): string;
    commaStartingX0(): string;
    daysOfTheWeek(): string[];
    daysOfTheWeekInCase(f?: number): string[];
    monthsOfTheYear(): string[];
    monthsOfTheYearInCase(f?: number): string[];
}
