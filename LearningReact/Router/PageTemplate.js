import { MainMenu } from './ui/menus'

const PageTemplate = ({children}) =>
    <div className="page">
        <MainMenu />
        {children}
    </div>
