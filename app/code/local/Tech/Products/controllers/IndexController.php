<?php
class Tech_Products_IndexController extends Mage_Core_Controller_Front_Action{
    public function IndexAction() {
      
	  $this->loadLayout();   
	  $this->getLayout()->getBlock("head")->setTitle($this->__("products"));
	        $breadcrumbs = $this->getLayout()->getBlock("breadcrumbs");
      $breadcrumbs->addCrumb("home", array(
                "label" => $this->__("Home Page"),
                "title" => $this->__("Home Page"),
                "link"  => Mage::getBaseUrl()
		   ));

      $breadcrumbs->addCrumb("products", array(
                "label" => $this->__("products"),
                "title" => $this->__("products")
		   ));

      $this->renderLayout(); 
	  
    }

    public function step2Action(){
      $this->loadLayout();   
      $postdata = $this->getRequest()->getParams();
      //print_r($postdata);
      $this->renderLayout(); 
    }
}