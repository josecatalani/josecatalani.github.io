
<?php if(isset($projectList)) { 
        $count = 1;
        $isBig = false;
?>
<div class="grid-sizer"></div>
<?php   foreach ($projectList as $projectItem) 
        { ?>

        <div id="project-item-<?php echo $count;?>" class="project-item <?php echo $isBig == true ? 'isbig' : 'issmall';?> m-all t-all d-1of3">
                <div class="image" style="background-image: url('<?php echo base_url($projectItem->path . $projectItem->cover);?>');"></div>
                        
                        <div class="hover">
                                <div class="text">
                                        <h2><span class="title"><a href="<?php echo $projectItem->link;?>" target="_blank"><?php echo $projectItem->title;?></a></span></h2>
                                        <p>por <span class="firm"><a href="<?php echo $projectItem->firmlink;?>" target="_blank"><?php echo $projectItem->firm;?></a></span> em <span class="year"><?php echo $projectItem->year;?></span></p>
                                </div>
                        </div>
                </div>
                <div class="description">
                        
                </div>
        </div>  
<?php   
        $isBig = !$isBig;
        $count++;
        }?>
<?php } ?>
