import * as b from 'bobril';
import { width as menuWidth } from '../menu/styles';
import * as colors from '../colors';

export const headerHeight = 60;
export const footerHeight = 0;
const defaultPadding = 30;

export const basicLayout = b.styleDef({
    minHeight: 750,
    position: 'relative',
    overflow: 'hidden'
});

export const header = b.styleDef({
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    height: headerHeight,
    zIndex: 100
});

export const menu = b.styleDef({
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 100,
    overflow: 'auto'
});

export const withMenu = b.styleDef({
    width: `calc(100% - ${menuWidth}px)`,
    marginLeft: menuWidth
});

export const content = b.styleDef({
    paddingBottom: footerHeight,
    background: colors.color02,
    backgroundImage: `-webkit-linear-gradient(160deg, #5a5f70 61%, 	#5D6273 61%)`,
    color: colors.color04
});

export const defaultContentPadding = b.styleDef({
    paddingTop: headerHeight + defaultPadding,
    paddingRight: defaultPadding,
    paddingLeft: defaultPadding
});

export const noTopContentPadding = b.styleDef({
    paddingTop: headerHeight
});

export const footer = b.styleDef({
    height: footerHeight,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0
});
