import './sidebar.css'

function SidebarOption({ active, text, Icon}){
    return(
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            {Icon}
            {text}
        </div>
    )
}

export default SidebarOption;