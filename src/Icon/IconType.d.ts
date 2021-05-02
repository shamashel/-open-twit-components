export type IconColor = 'primary' | 'secondary' | 'disabled' | string;
export type IconName = 'bookmark' | 'document' | 'hashtag' | 'home' | 'mail' | 'more' | 'more_outline' | 'notification' | 'person' | 'search';
export interface BaseIconProps {
    color: string;
    size: number;
}
