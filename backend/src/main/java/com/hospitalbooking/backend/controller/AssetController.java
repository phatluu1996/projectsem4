package com.hospitalbooking.backend.controller;


import com.hospitalbooking.backend.models.Asset;
import com.hospitalbooking.backend.repository.AssetRepos;
import com.hospitalbooking.backend.security.payload.response.MessageResponse;
import com.hospitalbooking.backend.specification.DBSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
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
        Specification<?> spec = DBSpecification.createSpecification(Boolean.FALSE);
        return new ResponseEntity<>(assetRepos.findAll(spec), HttpStatus.OK);
    }

    @PostMapping("/assets")
    public ResponseEntity add(@RequestBody Asset asset){
        Specification<?> spec = DBSpecification.createSpecification(Boolean.FALSE).and(((root, cq, cb) -> cb.equal(root.get("serialNumber"), asset.getSerialNumber())));
        if(assetRepos.exists(spec)){
            return new ResponseEntity(new MessageResponse("Duplicated serial number !", false), HttpStatus.OK);
        }
        assetRepos.save(asset);
        return new ResponseEntity<>(new MessageResponse("Done !", true), HttpStatus.OK);
    }

    @PutMapping("/assets/{id}")
    public ResponseEntity update(@RequestBody Asset asset, @PathVariable Long id){
        Optional<Asset> optional = assetRepos.findById(id);
        return optional.map(model -> {
            Specification<?> spec = DBSpecification.createSpecification(Boolean.FALSE)
                    .and(((root, cq, cb) -> cb.equal(root.get("serialNumber"), asset.getSerialNumber())))
                    .and(((root, cq, cb) -> cb.notEqual(root.get("id"), id)));
            if(assetRepos.exists(spec)){
                return new ResponseEntity(new MessageResponse("Duplicated serial number !", false), HttpStatus.OK);
            }
            asset.setId(model.getId());
            assetRepos.save(asset);
            return new ResponseEntity<>(new MessageResponse("Done !", true), HttpStatus.OK);
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
