<?php

namespace App\Services\QueryFragments;

use Uneca\Chimera\Services\AreaTree;

class KenyaCensusQueryFragments
{
    public function getSqlFragments(string $filterPath) : array
    {
        /*$filter = AreaTree::pathAsFilter($filterPath);
        $fromTables = [];
        if () {

        }
        return [$selectColumns, $whereConditions, $fromTables];*/

        return [[], [], []];
    }
}
