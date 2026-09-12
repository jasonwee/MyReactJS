import React from 'react'
import './coupon.css'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { FaRegCopy, FaList,FaEllipsisV, FaShareAlt } from "react-icons/fa";
import { RiSendPlaneFill, RiDeleteBin6Line } from "react-icons/ri";

const Coupon = () => {
   
  const copyCoupon = (e, data) => {
    var coupon = data.copy
    navigator.clipboard.writeText(coupon)
    alert(`Coupon code ${coupon} copied to your clipboard`)
  }

    return (
        <>
         <ContextMenuTrigger id="contextmenu">
            <div className="coupon">MI50</div>
      </ContextMenuTrigger>
 
      <ContextMenu id="contextmenu">
        <MenuItem data={{copy: 'MI50'}} onClick={copyCoupon}>
          <FaRegCopy className="copy"/>
          <span>Copy</span>
        </MenuItem>
        <MenuItem >
          <FaEllipsisV className="openwith"/>
          <span>Open with</span>
        </MenuItem>
        <MenuItem >
          <FaList className="watchlist"/>
          <span>Add to watchlist</span>
        </MenuItem>
        <MenuItem>
          <RiSendPlaneFill className="send"/>
          <span>Send</span>
        </MenuItem>
        <MenuItem>
          <RiDeleteBin6Line className="delete"/>
          <span>Delete</span>
        </MenuItem>
        <MenuItem>
          <FaShareAlt className="share"/>
          <span>Share</span>
        </MenuItem>
      </ContextMenu>
        </>
    )
}

export default Coupon
