package com.hospitalbooking.backend.controller;


import com.hospitalbooking.backend.models.Asset;
import com.hospitalbooking.backend.repository.AssetRepos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class AssetController {
    @Autowired
    private AssetRepos assetRepos;

    @GetMapping("/assets/{id}")
    public ResponseEntity<Asset> one(@PathVariable Long id){
        return assetRepos.findById(id).map(asset -> new ResponseEntity<>(asset, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/assets")
    public ResponseEntity<List<Asset>> all(){
        return new ResponseEntity<>(assetRepos.findAll(), HttpStatus.OK);
    }

    @PostMapping("/assets")
    public ResponseEntity<Asset> add(@RequestBody Asset asset){
        return new ResponseEntity<>(assetRepos.save(asset), HttpStatus.OK);
    }

    @PutMapping("/assets/{id}")
    public ResponseEntity<Asset> update(@RequestBody Asset asset, @PathVariable Long id){
        Optional<Asset> optional = assetRepos.findById(id);
        return optional.map(model -> {
            asset.setId(model.getId());
            return new ResponseEntity<>(assetRepos.save(asset), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/assets/{id}")
    public ResponseEntity<Asset> delete(@PathVariable Long id){
        Optional<Asset> optional = assetRepos.findById(id);
        return optional.map(model -> {
            model.setRetired(true);
            return new ResponseEntity<>(assetRepos.save(model), HttpStatus.OK);
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
