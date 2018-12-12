<?php   
class Tech_Products_Block_Index extends Mage_Catalog_Block_Product_List {   


public function getActionOfForm()
{
	return $this->getUrl('products/index/step2');
}

public function getCategoryList($ids)
{
	return $ids;
}



}