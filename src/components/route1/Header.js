import React from 'react'

export const Header = () => {
    return (
        <div>
            <form class="example" action="action_page.php">
            <input type="text" placeholder="Search.." name="search"/>
            <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>
    )
}
