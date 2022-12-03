import { ReactTestRendererJSON } from 'react-test-renderer';

export interface IComponentDriver<T = any> {
    wrapper: HTMLElement;
    render: (component: JSX.Element) => T;
    element: (selector: string) => HTMLElement;
    fire: (selector: string, event: Event) => void;
    snapshot: (component: JSX.Element) => ReactTestRendererJSON | ReactTestRendererJSON[] | null; // prettier-ignore
}
